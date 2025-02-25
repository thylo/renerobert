const moment = require("moment");

/**
 * Format dates using moment.js
 *
 * @param {Date} date - JS date
 * @param {String} format - Moment format string
 * @param {String} locale - Locale code
 * @return {String} formatted date
 */
module.exports = function (date, format, locale) {
  locale = locale ? locale : "en";
  moment.locale(locale);
  return moment(date).format(format);
};
