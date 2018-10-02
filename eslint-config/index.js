const fastlyPrettierConfig = require('@fastly/prettier-config')

const config = {
  extends: ['eslint:recommended', 'plugin:prettier/recommended', 'plugin:ember/recommended'],

  plugins: ['ember', 'prettier'],

  rules: {
    'brace-style': ['error', '1tbs', { allowSingleLine: true }],
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        exports: 'only-multiline',
        functions: 'ignore',
        imports: 'only-multiline',
        objects: 'only-multiline',
      },
    ],
    curly: ['error', 'multi-line'],
    'ember/no-observers': ['error'],
    'ember/use-ember-get-and-set': [
      'error',
      {
        ignoreThisExpressions: true,
      },
    ],
    'max-statements-per-line': ['error', { max: 2 }], // allow one-line if
    'no-console': [
      'error',
      {
        allow: ['error', 'warn'],
      },
    ],
    'prettier/prettier': ['error', fastlyPrettierConfig],
    'quote-props': ['error', 'as-needed'],
    quotes: ['error', 'single', { avoidEscape: true }],
    semi: ['error', 'never'],
    'sort-imports': [
      'error',
      {
        ignoreCase: true,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
      },
    ],
    'sort-keys': 0,
    'sort-vars': ['error', { ignoreCase: true }],
  },
}

// handled by prettier:
Object.assign(config.rules, {
  'array-bracket-spacing': 0,
  'arrow-parens': 0,
  'generator-star-spacing': 0,
  indent: 0,
  'keyword-spacing': 0,
  'operator-linebreak': 0,
  'space-before-function-paren': 0,
})

module.exports = config
