const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error();
  }

  if (arr.length === 0) {
    return arr;
  }

  let resArr = [];
  let arrCopy = arr.slice();

  arrCopy.forEach((item, index) => {
    //console.log(index, item === "--discard-next", index !== arr.length, typeof arr[index + 1] !== "string");
    if (typeof(item) === "number") {
      resArr.push(item);
    } else if (item === "--discard-next" && index !== arrCopy.length && typeof(arrCopy[index + 1]) !== "string") {
      arrCopy.splice(index + 1, 1);
      //console.log(arrCopy[index + 1]);
    } else if (item === "--discard-prev" && index !== 0 && typeof(arrCopy[index - 1]) !== "string") {
      resArr.pop();
    } else if (
      item === "--double-next" && index !== arrCopy.length && typeof(arrCopy[index + 1]) !== "string") {
      resArr.push(arrCopy[index + 1]);
    } else if (
      item === "--double-prev" &&  index !== 0 && typeof(arrCopy[index - 1]) !== "string" ) {
      resArr.push(arrCopy[index - 1]);
    }
  });
  return resArr;
};
//console.log(transform([1, 2, 3, '--discard-next', 1337, '--double-prev', 4, 5]));
