import js from '@eslint/js';
import globals from 'globals';
import importPlugin from 'eslint-plugin-import-x';
import stylisticJs from '@stylistic/eslint-plugin';

const INDENTATION_CHARS = 2;

export default [
  { ...js.configs.recommended, files: ['**/*.js', '**/*.mjs', '**/*.cjs'] },
  {
    ...importPlugin.flatConfigs.recommended,
    ...{
      name: 'eslint-config-ndla-h5p',
      files: ['**/*.js'],
      languageOptions: {
        parserOptions: {
          ecmaFeatures: {
            impliedStrict: true,
          },
        },
        globals: {
          ...globals.browser,
          H5P: 'readonly',
          H5PEditor: 'readonly',
          H5PIntegration: 'readonly',
        },
      },
      plugins: {
        import: importPlugin,
        '@stylistic/js': stylisticJs,
      },
      rules: {
        // H5P Group rules
        '@stylistic/js/semi': ['error', 'always'],
        '@stylistic/js/indent': ['error', INDENTATION_CHARS, { SwitchCase: 1 }],
        '@stylistic/js/brace-style': ['error', 'stroustrup'],
        '@stylistic/js/keyword-spacing': ['error', { after: true }],
        '@stylistic/js/comma-spacing': [
          'error',
          { before: false, after: true },
        ],
        '@stylistic/js/space-infix-ops': ['error', { int32Hint: false }],
        eqeqeq: ['error', 'smart'],
        '@stylistic/js/space-before-blocks': 'error',
        '@stylistic/js/space-before-function-paren': [
          'error',
          {
            anonymous: 'always',
            named: 'never',
            asyncArrow: 'always',
          },
        ],
        'no-extra-boolean-cast': 'off',
        'no-console': ['error', { allow: ['warn', 'error'] }],
        '@stylistic/js/quotes': ['error', 'single'],
        'import/extensions': ['error', 'ignorePackages', { js: 'always' }],
        'import/prefer-default-export': 'off',
        'no-restricted-syntax': 'off',
        'no-plusplus': 'off',
        'no-continue': 'off',
        // NDLA specific rules
        'no-use-before-define': 'error',
        'import/no-extraneous-dependencies': 'warn',
        '@stylistic/js/arrow-parens': ['error', 'always'],
        '@stylistic/js/object-curly-spacing': ['error', 'always'],
        'no-alert': ['error'],
        'no-eval': ['error'],
        'no-implied-eval': ['error'],
        '@stylistic/js/max-len': ['warn', { code: 120 }],
      },
    },
  },
  {
    // Same rules as above for TypeScript sources. The same
    // @stylistic/eslint-plugin object serves both the js and ts namespaces.
    // The consuming config must provide a TypeScript parser, e.g. by
    // including typescript-eslint.
    ...importPlugin.flatConfigs.recommended,
    ...{
      name: 'eslint-config-ndla-h5p/ts',
      files: ['**/*.ts', '**/*.tsx'],
      languageOptions: {
        parserOptions: {
          ecmaFeatures: {
            impliedStrict: true,
          },
        },
        globals: {
          ...globals.browser,
          H5P: 'readonly',
          H5PEditor: 'readonly',
          H5PIntegration: 'readonly',
        },
      },
      plugins: {
        import: importPlugin,
        '@stylistic/ts': stylisticJs,
      },
      settings: {
        'import-x/resolver': {
          typescript: true,
        },
      },
      rules: {
        // H5P Group rules
        '@stylistic/ts/semi': ['error', 'always'],
        '@stylistic/ts/indent': ['error', INDENTATION_CHARS, { SwitchCase: 1 }],
        '@stylistic/ts/brace-style': ['error', 'stroustrup'],
        '@stylistic/ts/keyword-spacing': ['error', { after: true }],
        '@stylistic/ts/comma-spacing': [
          'error',
          { before: false, after: true },
        ],
        '@stylistic/ts/space-infix-ops': ['error', { int32Hint: false }],
        eqeqeq: ['error', 'smart'],
        '@stylistic/ts/space-before-blocks': 'error',
        '@stylistic/ts/space-before-function-paren': [
          'error',
          {
            anonymous: 'always',
            named: 'never',
            asyncArrow: 'always',
          },
        ],
        'no-extra-boolean-cast': 'off',
        'no-console': ['error', { allow: ['warn', 'error'] }],
        '@stylistic/ts/quotes': ['error', 'single'],
        'import/extensions': [
          'error',
          'ignorePackages',
          { js: 'always', ts: 'never', tsx: 'never' },
        ],
        'import/prefer-default-export': 'off',
        'no-restricted-syntax': 'off',
        'no-plusplus': 'off',
        'no-continue': 'off',
        // NDLA specific rules
        'no-use-before-define': 'error',
        'import/no-extraneous-dependencies': 'warn',
        '@stylistic/ts/arrow-parens': ['error', 'always'],
        '@stylistic/ts/object-curly-spacing': ['error', 'always'],
        'no-alert': ['error'],
        'no-eval': ['error'],
        'no-implied-eval': ['error'],
        '@stylistic/ts/max-len': ['warn', { code: 120 }],
      },
    },
  },
  {
    name: 'eslint-config-ndla-h5p/node',
    files: ['webpack.config.js', 'eslint.config.js'],
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },
];
