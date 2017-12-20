## @fastly/eslint-config

This project represents Fastly's front-end style-guide as a set of configurations for common linters.
### Installation

With npm: `@fastly/lintly`.

### eslint

Add
```js
extends: "@fastly/lintly/eslint-config"
```
to your project's `.eslintrc.js`.

### Prettier

Add
```js
module.exports = require('@fastly/lintly/prettier.config')
```

to your project's `prettier.config.js`.
