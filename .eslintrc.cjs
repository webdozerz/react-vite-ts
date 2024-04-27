module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'standard-with-typescript'
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['tsconfig.json']
  },
  plugins: [
    'react'
  ],
  ignorePatterns: ['.eslintrc.cjs', 'vite.config.ts', 'scr'],
  rules: {
    'linebreak-style': ['off'],
    'import/extensions': ['off'],
    'no-plusplus': ['off'],
    '@typescript-eslint/array-type': ['off'],
    '@typescript-eslint/explicit-function-return-type': ['warn'],
    '@typescript-eslint/no-explicit-any': ['off'],
    '@typescript-eslint/ban-ts-comment': ['off'],
    '@typescript-eslint/strict-boolean-expressions': ['off'],
    '@typescript-eslint/no-shadow': ['error'],
    'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
    'space-before-function-paren': ['error'],
    'no-param-reassign': [
      'error', {
        props: false
      }
    ],
    '@typescript-eslint/consistent-type-assertions': ['warn', { assertionStyle: 'as', objectLiteralTypeAssertions: 'allow' }],
    'no-console': ['off'],
    'no-return-await': ['off'],
    'no-shadow': 'off',
    'no-underscore-dangle': 'off',
    'import/no-dynamic-require': 'off',
    'global-require': 'off',
    'max-len': ['error', { code: 140 }],
    'no-undef': 'off',
    '@typescript-eslint/no-misused-promises': ['warn', {
      checksVoidReturn: false
    }],
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.tsx'] }],
    '@typescript-eslint/explicit-module-boundary-types': ['off'],
    'react/display-name': ['off'],
    '@typescript-eslint/no-unused-vars': ['warn'],
    "@typescript-eslint/restrict-template-expressions": "off",
    'no-extra-boolean-cast': "off"
  }
}
