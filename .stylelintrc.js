module.exports = {
  root: true,
  defaultSeverity: 'error',
  extends: [
    'stylelint-config-standard', // 配置 stylelint 拓展插件
    'stylelint-config-html/vue', // 配置 vue 中 template 样式格式化
    'stylelint-config-standard-scss', // 配置 stylelint scss 插件
    'stylelint-config-recommended-vue/scss', // 配置 vue 中 scss 样式格式化
  ],
  rules: {
    'rule-empty-line-before': null,
    'color-hex-length': 'long',
    'declaration-empty-line-before': 'never',
    'comment-empty-line-before': 'never',
    'comment-whitespace-inside': 'always',
    'declaration-block-no-duplicate-properties': true,
    'font-family-no-missing-generic-family-keyword': null,
    'no-descending-specificity': null,
  },
};
