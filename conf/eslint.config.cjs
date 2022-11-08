/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 'latest',
    project: './conf/tsconfig.eslint.json',
    extraFileExtensions: [
      '.svelte',
    ],
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:@typescript-eslint/strict',
    'plugin:svelte/recommended',
    'airbnb-base',
    'airbnb-typescript/base',
  ],
  plugins: [
    '@typescript-eslint',
    'import',
    'import-alias',
  ],
  settings: {
    'import/resolver': {
      typescript: {
        extensions: [
          '.js',
          '.cjs',
          '.mjs',
          '.ts',
          '.d.ts',
        ],
      },
    },
  },
  rules: {
    '@typescript-eslint/consistent-type-exports': 'error',
    '@typescript-eslint/consistent-type-imports': 'error',
    'no-extra-parens': 'off',
    '@typescript-eslint/no-extra-parens': 'error',
    '@typescript-eslint/member-delimiter-style': 'error',
    '@typescript-eslint/method-signature-style': 'error',
    'no-invalid-this': 'off',
    '@typescript-eslint/no-invalid-this': 'error',
    '@typescript-eslint/promise-function-async': 'error',
    'import/prefer-default-export': 'off',
    '@typescript-eslint/consistent-type-assertions': [
      'error',
      {
        assertionStyle: 'angle-bracket',
      },
    ],
    '@typescript-eslint/no-magic-numbers': [
      'error',
      {
        ignore: [
          0,
          1,
          6969,
        ],
      },
    ],
    'import/extensions': [
      'error',
      'always',
      {
        '': 'never',
        js: 'never',
        ts: 'never',
      },
    ],
    'max-len': [
      'error',
      {
        code: 120,
      },
    ],
    'no-param-reassign': [
      'error',
      {
        props: false,
      },
    ],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          './conf/*',
        ],
      },
    ],
    'import/order': [
      'error',
      {
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        'newlines-between': 'always',
        warnOnUnassignedImports: true,
        groups: [
          'builtin',
          'external',
          'unknown',
          'internal',
          'parent',
          'sibling',
          'index',
          'object',
          'type',
        ],
        pathGroups: [{
          pattern: '$scss/**',
          group: 'object',
        }],
      },
    ],
    'import-alias/import-alias': [
      'error',
      {
        relativeDepth: -1,
        aliases: [{
          alias: '$lib',
          matcher: '^lib',
        }, {
          alias: '$scss',
          matcher: '^scss',
        }, {
          alias: '$types',
          matcher: '^types',
        }],
      },
    ],
  },
  overrides: [{
    files: [
      '*.svelte',
    ],
    parser: 'svelte-eslint-parser',
    parserOptions: {
      parser: '@typescript-eslint/parser',
    },
    rules: {
      '@typescript-eslint/no-unsafe-assignment': 'off',
      '@typescript-eslint/no-unsafe-member-access': 'off',
      'import/no-extraneous-dependencies': 'off',
      'import/no-mutable-exports': 'off',
      'import/no-unresolved': 'off',
      indent: 'off',
      'svelte/indent': 'error',
      'svelte/button-has-type': 'error',
      'svelte/derived-has-same-inputs-outputs': 'error',
      'svelte/first-attribute-linebreak': 'error',
      'svelte/mustache-spacing': 'error',
      'svelte/no-export-load-in-svelte-module-in-kit-pages': 'error',
      'svelte/no-extra-reactive-curlies': 'error',
      'svelte/no-reactive-functions': 'error',
      'svelte/no-reactive-literals': 'error',
      'svelte/no-store-async': 'error',
      'svelte/no-target-blank': 'error',
      'svelte/no-spaces-around-equal-signs-in-attribute': 'error',
      'svelte/no-useless-mustaches': 'error',
      'svelte/prefer-class-directive': 'error',
      'svelte/prefer-style-directive': 'error',
      'svelte/require-optimized-style-attribute': 'error',
      'svelte/require-store-callbacks-use-set-param': 'error',
      'svelte/require-store-reactive-access': 'error',
      'svelte/require-stores-init': 'error',
      'svelte/shorthand-attribute': 'error',
      'svelte/shorthand-directive': 'error',
      'svelte/sort-attributes': 'error',
      'svelte/spaced-html-comment': 'error',
      'svelte/valid-prop-names-in-kit-pages': 'error',
      'max-len': [
        'error',
        {
          code: 120,
          ignorePattern: '^\\s*<.+>$|^\\s*<.+/>$|^.+=".+"$',
        },
      ],
      'svelte/html-closing-bracket-spacing': [
        'error',
        {
          selfClosingTag: 'never',
        },
      ],
      'svelte/html-quotes': [
        'error',
        {
          dynamic: {
            quoted: true,
          },
        },
      ],
      'svelte/max-attributes-per-line': [
        'error',
        {
          singleline: 3,
        },
      ],
    },
  }, {
    files: [
      '+*server.ts',
    ],
    rules: {
      'no-console': 'off',
    },
  }, {
    files: [
      '*.ts',
      '*.d.ts',
      '*.svelte',
    ],
    rules: {
      '@typescript-eslint/explicit-function-return-type': 'error',
    },
  }, {
    files: [
      '*.cjs',
    ],
    rules: {
      '@typescript-eslint/no-var-requires': 'off',
    },
  }, {
    files: [
      'svelte.config.js',
      './conf/*',
    ],
    rules: {
      'import-alias/import-alias': 'off',
    },
  }],
};
