## @fastly/prettier-config

### Installation

```sh
npm install --save-dev @fastly/prettier-config
```

### Configuration

This will give you the recommended ruleset:

```js
// my-app/prettier.config.js
module.exports = require('@fastly/prettier-config')
```

You can override that as needed:

```js
// my-app/prettier.config.js
module.exports = Object.assign(
  {},
  require('@fastly/prettier-config'),
  {
    lineWidth: 120
  }
)
```
