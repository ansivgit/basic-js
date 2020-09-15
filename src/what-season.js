const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (!date) { return 'Unable to determine the time of year!' };

  try {
    const month = date.getMonth();
    if (month === 0 || month === 1 || month === 11) {
      return 'winter';
    } else if (month >= 2 && month <= 4) {
      return 'spring';
    } else if (month >= 5 && month <= 7) {
      return 'summer';
    } else if (month) {
      return 'autumn';
    } else if (!date.getMonth()) { // начиная с этого места не работает как надож
      throw new Error('THROWN');
    }
  } catch (e) {
    console.log("Date Error: " + e.message);
  }
};
