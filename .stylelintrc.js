module.exports = {
  root: true,
  defaultSeverity: 'error',
  extends: [
    "stylelint-config-standard", // 配置 stylelint 拓展插件
    'stylelint-config-html/vue', // 配置 vue 中 template 样式格式化
    "stylelint-config-standard-scss", // 配置 stylelint scss 插件
    "stylelint-config-recommended-vue/scss", // 配置 vue 中 scss 样式格式化
  ],
  overrides: [
    {
      files: ['**/*.(scss|css|vue|html)'],
      customSyntax: 'postcss-scss',
    },
    {
      files: ['**/*.(html|vue)'],
      customSyntax: 'postcss-html',
    },
  ],
  rules: {
    'indentation': 2,
    'rule-empty-line-before': null,
    'function-comma-space-after': 'always',
    'selector-list-comma-newline-after': 'always',
    'color-hex-case': 'upper',
    'color-hex-length': 'long',
    'declaration-empty-line-before': 'never',
    'comment-empty-line-before': 'never',
    'block-closing-brace-empty-line-before': 'never',
    'no-eol-whitespace': true,
    'declaration-bang-space-before': 'always',
    'comment-whitespace-inside': 'always',
    'declaration-block-no-duplicate-properties': true,
    'value-list-comma-space-after': 'always',
    'font-family-no-missing-generic-family-keyword': null,
    'no-descending-specificity': null,
    'value-list-comma-newline-after': null,
  }
};