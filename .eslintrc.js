module.exports = {
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "settings": {
        "react": {
          "version": "18.2.0"
        }
    },
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "env": {
        "es6": true,
        "node": true,
        "browser": true,
        "amd": true
    },
}
