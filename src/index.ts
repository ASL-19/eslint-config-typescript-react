const eslintConfigTypescriptReact = {
  extends: [
    "airbnb-typescript",
    "airbnb/hooks",
    "@asl-19/typescript",
    "prettier/react",
  ],
  plugins: ["@emotion"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    "@emotion/jsx-import": "error",
    "@emotion/syntax-preference": ["error", "string"],
    // Via https://github.com/evcohen/eslint-plugin-jsx-a11y/issues/402#issuecomment-368305051
    // Required until https://github.com/zeit/next.js/issues/5533 is resolved
    "jsx-a11y/anchor-is-valid": [
      "error",
      {
        components: ["Link"],
        aspects: ["invalidHref", "preferButton"],
      },
    ],
    // Disabled until https://github.com/yannickcr/eslint-plugin-react/issues/1848 is fixed
    "react/jsx-one-expression-per-line": "off",
    "react/jsx-props-no-spreading": "off",
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off",
  },
};

export = eslintConfigTypescriptReact;
