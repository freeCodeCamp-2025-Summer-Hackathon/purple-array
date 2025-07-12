export default {
    '*!(*.config|*-lock).js': ['eslint --fix'],
    '*.{js,mjs,cjs,json,md}': ['prettier --write'],
};
