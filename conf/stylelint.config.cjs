/**
 * @type {import('stylelint').Config}
 */
module.exports = {
  extends: 'stylelint-config-recommended-scss',
  plugins: [
    'stylelint-scss',
  ],
  rules: {
    'color-function-notation': 'modern',
    'comment-whitespace-inside': 'always',
    'declaration-empty-line-before': 'never',
    'declaration-no-important': true,
    'font-family-name-quotes': 'always-unless-keyword',
    'font-weight-notation': 'numeric',
    'function-name-case': 'lower',
    'function-url-quotes': 'always',
    'import-notation': 'string',
    'keyframes-name-pattern': /^([a-z][a-z0-9]*)(-[a-z0-9]+)*$/,
    'keyframe-selector-notation': 'percentage-unless-within-keyword-only-block',
    'shorthand-property-no-redundant-values': true,
    'selector-attribute-quotes': 'always',
    'selector-not-notation': 'complex',
    'selector-pseudo-element-colon-notation': 'double',
    'selector-type-case': 'lower',
    'value-keyword-case': [
      'lower',
      {
        camelCaseSvgKeywords: true,
        ignoreKeywords: [/^geometricPrecision$/],
      },
    ],
    'rule-empty-line-before': [
      'always',
      {
        except: [
          'after-single-line-comment',
          'first-nested',
        ],
      },
    ],
    'scss/at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'apply',
          'screen',
          'tailwind',
        ],
      },
    ],
  },
  overrides: [{
    files: [
      '../**/*.svelte',
    ],
    customSyntax: 'postcss-html',
    rules: {
      'selector-pseudo-class-no-unknown': [
        true,
        {
          ignorePseudoClasses: [
            'global',
          ],
        },
      ],
    },
  }, {
    files: [
      '../**/*.html',
    ],
    customSyntax: 'postcss-html',
  }],
};
