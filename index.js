
var blacklist = require('./number-list.json');

/**
 * Expose `isDisposablePhoneNumber`.
 */

module.exports = isDisposablePhoneNumber;

/**
 * Determine whether an email is disposable.
 *
 * @param {String} string
 * @return {Boolean}
 */

function isDisposablePhoneNumber (phonenumber) {
  phonenumber = phonenumber.replace(/[^0-9]/, "");
  return phonenumber in blacklist;
}