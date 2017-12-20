module.exports = {
  extends: 'eslint:recommended',

  rules: {
    'array-bracket-spacing': [ 'error', 'always' ],
    'brace-style': [ 'error', '1tbs', { allowSingleLine: true } ],
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
    curly: [ 'error', 'multi-line' ],
    'ember-suave/no-const-outside-module-scope': 'off',
    'ember-suave/no-direct-property-access': 'off',
    indent: [ 'error', 2, { MemberExpression: 0 } ],
    'max-statements-per-line': [ 'error', { max: 2 } ], // allow one-line if
    'operator-linebreak': [ 'error', 'after' ],
    'quote-props': [ 'error', 'as-needed' ],
    quotes: [ 'error', 'single', { avoidEscape: true } ],
    semi: [ 'error', 'never' ],
  },
}
