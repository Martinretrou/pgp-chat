module.exports = {
  printWidth: 100,
  singleQuote: true,
  semi: false,
  trailingComma: 'all',
  importOrder: [
    '(^@|^[A-Za-z])(?!internals)(.*(?<!tyles)$)',
    '(^[.]|^@internals)(?!^[A-Za-z])(.*(?<!tyles)$)',
    'tyles',
  ],
  importOrderSeparation: true,
};
