export default {
    "*!(*config).js": [
      "eslint --fix"
    ],
    "*.{js,mjs,cjs,json,md}": [
      "prettier --write"
    ]
  }
