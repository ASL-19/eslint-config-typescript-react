# @asl-19/eslint-config-typescript-react

Shared ESLint config for [ASL19](https://asl19.org/) TypeScript + React projects.

Non-React projects should use [@asl-19/eslint-config-typescript](https://github.com/ASL-19/eslint-config-typescript).

## How to use

### Install

```sh
yarn add @asl-19/eslint-config-typescript-react --dev
npx install-peerdeps @asl-19/eslint-config-typescript-react --dev
```

### Add to ESLint config

Create a `.eslintrc.js` containing (at least) the following:

```js
module.exports = {
  extends: ["@asl-19/typescript-react"],
};
```

### Compatibility

This package is developed and used with Node.js 12 (the active LTS [release](https://nodejs.org/en/about/releases/) as of 2020-06). The code should be forward-compatible, but use with newer Node.js versions is untested and unsupported.
