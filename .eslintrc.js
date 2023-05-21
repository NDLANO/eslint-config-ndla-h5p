module.exports = {
  globals: {
    'H5P': 'readonly',
    'H5PEditor': 'readonly',
    'H5PIntegration': 'readonly'
  },
  plugins: [
    'import',
  ],
  rules: {
    semi: [2, 'always'],
    indent: ['error', 2, { SwitchCase: 1 }],
    'brace-style': ['error', 'stroustrup'],
    'keyword-spacing': ['error', { after: true }],
    'comma-spacing': ['error', { before: false, after: true }],
    'space-infix-ops': ['error', { int32Hint: false }],
    eqeqeq: [2, 'smart'],
    'space-before-blocks': 'error',
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'always',
      },
    ],
    'no-extra-boolean-cast': 'off',
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'arrow-parens': ['error', 'always'],
    'no-use-before-define': 'error',
    'import/no-extraneous-dependencies': 'warn',
    'quotes': ['error', 'single'],
    'object-curly-spacing': ['error', 'always']
  },
};
