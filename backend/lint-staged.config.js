export default {
    "*!(*config).js": [
      "eslint --fix"
    ],
    "*.{js,json,md}": [
      "prettier --write"
    ]
  }
