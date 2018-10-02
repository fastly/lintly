## @fastly/eslint-config

### Installation

```sh
npm install --save-dev \
  @fastly/eslint-config@^1.0.0 \
  @fastly/prettier-config@^1.0.0 \
  eslint-plugin-ember@^5.0.0 \
  eslint-config-prettier@^2.9.0 \
  eslint-plugin-prettier@^2.4.0 \
  eslint@^4.12.1 \
  prettier@^1.9.2
```

Currently, `@fastly/eslint-config` declares several `peerDependencies` because eslint's module-loader is incapable of finding transitive dependencies. See [eslint/eslint#3458](https://github.com/eslint/eslint/issues/3458). When eslint supports transitive plugins, `@fastly/eslint-config` can declare true dependencies so consuming projects can install just a single package.

### Configuration

The simplest configuration is to accept the Fastly defaults:

```js
// my-app/.eslintrc.js
extends: ['@fastly'],
```

This includes

 * [`eslint:recommended`](https://eslint.org/docs/rules/)
 * [`plugin:ember/recommended`](https://github.com/ember-cli/eslint-plugin-ember)
 * `prettier:recommended` and [`@fastly/prettier-config`](../prettier-config/) via [eslint-plugin-prettier`](https://github.com/prettier/eslint-plugin-prettier)`
 * some custom overrides

If you want to extend other configurations as well, we recommend extending `@fastly` last so it wins:

```js
// my-app/.eslintrc.js
extends: ['airbnb-base', '@fastly'],
```

And of course, you can always override the Fastly defaults:

```js
// my-app/.eslintrc.js
extends: ['@fastly'],
rules: {
  'no-empty': 0
}
```

### Use with Prettier

This library automatically includes `@fastly/prettier-config` as eslint rules, so running `eslint` will validate against that configuration. See the [`@fastly/prettier-config` docs](../prettier-config) for information about setting up a `prettier.config.js` in your project to work with tools like editor plugins.
