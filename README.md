# eslint-config

**Shareable [ESLint](https://eslint.org) configuration.**

[![npm](https://img.shields.io/npm/v/@cargosense/eslint-config.svg?logo=npm&style=for-the-badge)](https://www.npmjs.com/package/@cargosense/eslint-config)
[![Downloads](https://img.shields.io/npm/dt/@cargosense/eslint-config.svg?logo=npm&style=for-the-badge)](https://www.npmjs.com/package/@cargosense/eslint-config)
[![Build](https://img.shields.io/github/actions/workflow/status/CargoSense/eslint-config/ci.yml?branch=main&logo=github&style=for-the-badge)](https://github.com/CargoSense/eslint-config/actions/workflows/ci.yml)

## Installation

```sh
npm install --save-dev @cargosense/eslint-config
```

## Usage

Using [ECMAScript module (ESM)](https://nodejs.org/api/esm.html) syntax:

```js
// eslint.config.js
export { default } from "@cargosense/eslint-config";
```

You may also apply this shared configuration to your project's customized configuration:

```js
// eslint.config.js
import config from "@cargosense/eslint-config";

export default [
  ...config,

  {
    "rules": {
      // …
    },
  },
];
```

> [!TIP]
> ESLint is _extremely_ customizable. Refer to [the documentation](https://eslint.org/docs/latest/use/configure/configuration-files) for details.

## License

eslint-config is freely available under the [MIT License](https://opensource.org/licenses/MIT).
