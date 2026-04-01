import globals from 'globals';
import importPlugin from 'eslint-plugin-import';
import stylisticJs from '@stylistic/eslint-plugin';

const INDENTATION_CHARS = 2;

export default [{
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
      'import': importPlugin,
      '@stylistic/js': stylisticJs,
    },
    rules: {
      // H5P Group rules
      '@stylistic/js/semi': ['error', 'always'],
      '@stylistic/js/indent': ['error', INDENTATION_CHARS, { 'SwitchCase': 1 }],
      '@stylistic/js/brace-style': ['error', 'stroustrup'],
      '@stylistic/js/keyword-spacing': ['error', { 'after': true }],
      '@stylistic/js/comma-spacing': ['error', { 'before': false, 'after': true }],
      '@stylistic/js/space-infix-ops': ['error', { 'int32Hint': false }],
      'eqeqeq': ['error', 'smart'],
      '@stylistic/js/space-before-blocks': 'error',
      '@stylistic/js/space-before-function-paren': ['error', {
        'anonymous': 'always',
        'named': 'never',
        'asyncArrow': 'always',
      }],
      'no-extra-boolean-cast': 'off',
      'no-console': ['error', { 'allow': ['warn', 'error'] }],
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
      '@stylistic/js/max-len': ['warn', { 'code': 120 }],
    },
  },
}];
