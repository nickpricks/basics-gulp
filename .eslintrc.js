module.exports = {
  "extends": "standard",
  "plugins": [
    "standard",
    "promise"
  ],
  "rules": {
    "max-len": [2, { "code": 120, "ignoreUrls": true }],
    "indent": [2, 2, { "SwitchCase": 1 }],
    "semi": ["error", "always"],
    "quotes": ["error", "single"]
  }
};
