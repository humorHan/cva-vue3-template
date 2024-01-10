module.exports = {
  root: true,
  extends: [
    "stylelint-config-standard", // 配置 stylelint 拓展插件
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
