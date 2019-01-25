# is-disposable-phonenumber
Determine if a phone number is a [disposable phone number](https://en.wikipedia.org/wiki/Disposable_numbers). You can use it to detect or block disposable accounts in your signup process.

The list comes from [@iP1SMS/disposable-phone-numbers](https://github.com/iP1SMS/disposable-phone-numbers) and this wrapper is based on [@ivolo/is-disposable-email](https://github.com/ivolo/is-disposable-email).

# Example
```javascript
var disposable = require('is-disposable-phonenumber');

disposable("+18286623154"); // true
```

# Installation

```
$ npm install is-disposable-phonenumber
```

# License

MIT.