
try {
  var disposable = require('is-disposable-phonenumber');
} catch (e) {
  var disposable = require('../');
}

var assert = require('assert');

describe('is-disposable-phonenumber', function () {

  it('should detect disposable phone numbers', function () {
    assert(disposable('+14015924672'));
  });

  it('should not detect personal phone numbers', function () {
    assert(!disposable('+13239851920'));
  });

  it('should not detect fake emails', function () {
    assert(!disposable('+12345678910'));
  });

  it('should not detect company phone numbers', function () {
    assert(!disposable('+16502530000'));
  });
});