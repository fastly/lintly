module.exports = {
  extends: ['eslint:recommended', 'plugin:ember-suave/recommended'],

  rules: {
    'brace-style': ['error', '1tbs', { allowSingleLine: true }],
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'only-multiline',
        imports: 'only-multiline',
        exports: 'only-multiline',
        functions: 'ignore',
      },
    ],
    curly: ['error', 'multi-line'],
    'ember-suave/no-const-outside-module-scope': 'off',
    'ember-suave/no-direct-property-access': 'off',
    'max-statements-per-line': ['error', { max: 2 }], // allow one-line if
    'operator-linebreak': ['error', 'after'],
    'quote-props': ['error', 'as-needed'],
    quotes: ['error', 'single', { avoidEscape: true }],
    semi: ['error', 'never'],

    // handled by prettier:
    'array-bracket-spacing': 0,
    'arrow-parens': 0,
    indent: 0,
    'keyword-spacing': 0,
  },
}
