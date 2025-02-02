module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    ...reactHooks.configs.recommended.rules,
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    "import/prefer-default-export": "off",
    "@typescript-eslint/ban-types": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/no-magic-numbers": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-implied-eval": "off",
    "@typescript-eslint/dot-notation": "off",
    "@typescript-eslint/no-floating-promises": "off",
    "@typescript-eslint/no-shadow": "off",
    "@typescript-eslint/no-unsafe-argument": "off",
    "@typescript-eslint/no-unsafe-member-access": "off",
    "@typescript-eslint/no-unsafe-assignment": "off",
    "@typescript-eslint/no-redundant-type-constituents": "off",
    "@typescript-eslint/no-type-alias": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/consistent-type-imports": "off",
    "@typescript-eslint/padding-line-between-statements": "off",
    "@typescript-eslint/prefer-enum-initializers": "off",
    "@typescript-eslint/prefer-readonly-parameter-types": "off",
    "@typescript-eslint/prefer-regexp-exec": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/init-declarations": "off",
    "@typescript-eslint/non-nullable-type-assertion-style": "off",
    "@typescript-eslint/strict-boolean-expressions": "off",
    "@typescript-eslint/no-implicit-any-catch": "off",
    "@typescript-eslint/member-ordering": "off",
    "@typescript-eslint/prefer-includes": "off",
    "@typescript-eslint/no-restricted-imports": "off",
    "@typescript-eslint/no-unsafe-call": "off",
    "import/no-deprecated": "error",
    "import/order": "off",
    "react/function-component-definition": "off",
    "react/no-did-update-set-state": "off",
    "react/no-find-dom-node": "off",
    "react/no-is-mounted": "off",
    "react/no-redundant-should-component-update": "off",
    "react/no-render-return-value": "off",
    "react/no-string-refs": "off",
    "react/no-this-in-sfc": "off",
    "react/no-will-update-set-state": "off",
    "react/prefer-es6-class": "off",
    "react/no-unused-state": "off",
    "react/prefer-stateless-function": "off",
    "react/require-render-return": "off",
    "react/sort-comp": "off",
    "react/state-in-constructor": "off",
    "react/static-property-placement": "off",
    "react/display-name": "off",
    "react/jsx-filename-extension": [
      1,
      {
        "extensions": [".js", ".jsx", "ts", ".tsx"]
      }
    ],
    "react/boolean-prop-naming": [
      "error",
      {
        "validateNested": true
      }
    ],
    "react/no-unstable-nested-components": "off",
    "react/jsx-handler-names": [
      "off",
      {
        "eventHandlerPrefix": "on",
        "eventHandlerPropPrefix": "on",
        "checkLocalVariables": true,
        "checkInlineFunction": true
      }
    ],
    "react/jsx-key": "error",
    "react/jsx-no-bind": [
      "error",
      {
        "ignoreRefs": false,
        "allowArrowFunctions": true,
        "allowFunctions": true,
        "allowBind": false,
        "ignoreDOMComponents": false
      }
    ],
    "react/jsx-no-constructed-context-values": "error",
    "react/jsx-no-script-url": "error"
  },
} 