module.exports = {
    env: {
        browser: true,
        es6: true
    },
    globals: {
        Atomics: "readonly",
        SharedArrayBuffer: "readonly"
    },
    parserOptions: {
        ecmaVersion: 2018
    },
    plugins: ["prettier"],
    rules: {
        "prettier/prettier": "error"
    },
    extends: ["plugin:prettier/recommended"]
};
