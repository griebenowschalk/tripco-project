module.exports = {
    root: true,
    env: { browser: true, es2020: true },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended-type-checked',
        'plugin:react-hooks/recommended',
        "plugin:react/recommended",
        "plugin:react/jsx-runtime"
    ],
    plugins: ['react-refresh', 'prettier'],
    ignorePatterns: ['dist', '.eslintrc.cjs'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: ['./tsconfig.json', './tsconfig.node.json'],
        tsconfigRootDir: __dirname,
    },
    rules: {
        'prettier/prettier': 'error',
        'react-refresh/only-export-components': [
            'warn',
            { allowConstantExport: true },
        ],
        'react-hooks/exhaustive-deps': 'off', // Disable the rule globally
    },
};