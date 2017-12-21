## @fastly/eslint-config

### Installation

```sh
npm install --save-dev @fastly/eslint-config eslint-plugin-ember-suave@^1.0.0
```

Currently, `@fastly/eslint-config` declares `eslint-plugin-ember-suave` as a peer dependency because eslint's module-loader is incapable of finding transitive dependencies. See [eslint/eslint#3458](https://github.com/eslint/eslint/issues/3458). When eslint supports transitive plugins, `@fastly/eslint-config` can declare a true dependency on `eslint-plugin-ember-suave` so consuming projects don't have to.

### Configuration

The simplest configuration is to accept the Fastly defaults:

```js
// my-app/.eslintrc.js
extends: ['@fastly'],
```

This also includes [ember-suave's](https://github.com/DockYard/eslint-plugin-ember-suave) recommended profile, with a few tweaks.

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
