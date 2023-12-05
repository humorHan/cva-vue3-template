// commit-msg提交日志参考angular团队规范：https://github.com/angular/angular.js/blob/master/DEVELOPERS.md#-git-commit-guidelines

module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'header-max-length': [2,'always',72], //header字符最大长度为72
    'subject-full-stop': [2,'never','.'], //subject结尾不加'.'
    'type-case': [2,'always','lowerCase'], //type首字母小写
    'type-empty': [2,'never'], //type不为空
    'subject-empty': [2,'never'], //说明不为空
    'type-enum':[
      2,
      'always',
      [ "feat",
        "fix",
        "framework", 
        "refactor",
        "test",
        "docs",
        "perf",
        "reset",
        "revert"
    ]
  ]
}
}