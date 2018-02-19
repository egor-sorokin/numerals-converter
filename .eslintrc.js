module.exports = {
  "env": {
    "browser": true,
    "es6": true
  },
  "extends": "eslint:recommended",
  "parserOptions": {
    "sourceType": "module"
  },
  "globals": {
    "Modernizer": true,
    "require": true,
    "_httpGet": true,
    "_isDOMSelector": true
  },
  "rules": {
    "eqeqeq": [
      "error",
      "always"
    ],
    "no-alert": "error",
    "no-console": "warn",
    "no-eq-null": "error",
    "no-eval": "error",
    "strict": "warn",
    "no-lone-blocks": "error",
    "no-multi-spaces": [
      2, {
        exceptions: {
          "ImportDeclaration": true
        }
      }
    ],
    "no-shadow": [
      "warn", {
        "hoist": "functions",
        "builtinGlobals": true
      }
    ],
    "no-undefined": "error",
    "no-shadow-restricted-names": "error",
    "no-var": "error",
    "indent": [
      "error",
      2
    ],
    "linebreak-style": [
      "error",
      "unix"
    ],
    "brace-style": [
      "error", "1tbs"
    ],
    "camelcase": "error",
    "comma-spacing": [
      "error", {
        "before": false,
        "after": true
      }
    ],
    "eol-last": ["error", "always"],
    "no-inline-comments": "error",
    "no-mixed-spaces-and-tabs": ["error", "smart-tabs"],
    "no-trailing-spaces": "error",
    "quotes": [
      "error",
      "single"
    ],
    "semi": [
      "error",
      "always"
    ],
    "semi-spacing": "error",
    "keyword-spacing": [
      "error", {
        "before": true,
        "after": true
      }
    ],
    "space-before-blocks": "error",
  }
};
