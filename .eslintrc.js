module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: 'tsconfig.json',
        sourceType: 'module',
        ecmaVersion: 6
    },
    plugins: [
        '@typescript-eslint/eslint-plugin',
        'prettier',
    ],
    extends: [
        'eslint:all',
        'prettier',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
    ],
    root: true,
    env: {
        node: true,
    },
    rules: {
        'no-console': 'warn',
        '@typescript-eslint/no-unused-vars': 'off',
        '@typescript-eslint/interface-name-prefix': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        'new-cap': 'off',
        'no-useless-constructor': 'off',
        'sort-keys': 'off',
        'func-style': 'off',
        'no-magic-numbers': 'warn',
        'max-classes-per-file': 'warn',
        'no-ternary': 'off',
        'sort-imports': 'off',
        'require-unicode-regexp': 'off',
        'class-methods-use-this': 'off',
        'init-declarations': 'off',
        'sort-vars': 'off',
        'no-undefined': 'off',
        "max-params": 'off',
        "require-await": 'off',
        'prettier/prettier': ['error']
    },
};
