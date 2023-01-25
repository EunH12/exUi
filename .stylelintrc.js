module.exports = {
  extends: [
    'stylelint-config-standard-scss',
    'stylelint-config-recommended',
    'stylelint-config-styled-components',
    'stylelint-config-recess-order'
  ],
  rules: {
    // Do not use a browser prefix that is already supported by autoprefixer‰
    'no-empty-first-line': null,
    'value-keyword-case': null,
    'at-rule-no-unknown': null,
    'media-feature-name-no-vendor-prefix': true,
    'at-rule-no-vendor-prefix': true,
    'selector-no-vendor-prefix': true,
    'property-no-vendor-prefix': true,
    'value-no-vendor-prefix': true,
    'function-no-unknown': null,
    'no-descending-specificity': null,
    'selector-pseudo-element-no-unknown': null,
    'selector-pseudo-class-no-unknown': null,
    'no-invalid-position-at-import-rule': null,
    'selector-class-pattern': '^[a-z]([a-z0-9-]+)?(__([a-z0-9]+-?)+)?(--([a-z0-9]+-?)+){0,2}$|^Mui.*$',
    'declaration-block-no-duplicate-properties': true,
    'scss/dollar-variable-pattern': null,
    'function-no-unknown': null,
    'string-quotes': 'single',
    'scss/operator-no-unspaced': null
  },
  "overrides": [
    {
      "files": ["**/*.scss"],
      "customSyntax": "postcss-scss",
      "rules": {
        "at-rule-no-unknown": null
      }
    },
    {
      "files": ["**/*.{js,ts,jsx,tsx}"],
      "customSyntax": "@stylelint/postcss-css-in-js",
      "rules": {
        "at-rule-no-unknown": null
      }
    }
  ],
  ignoreFiles: [
    'dist/**/*'
  ]
}
