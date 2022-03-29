const moment = require('moment');
const secret = require('secret');
module.exports = [
  [
    '@vuepress/last-updated',
    {
      transformer: (timestamp, lang) => {
        const moment = require('moment')
        // moment.locale(lang)
        moment.locale('zh-cn')
        return moment(timestamp).format('LLLL')
      }
    }
  ],
  [
    '@vuepress/pwa', {
      serviceWorker: true,
      updatePopup: {
        message: "发现新内容发布",
        buttonText: "刷新"
      }
    }
  ],
  ['@vuepress/back-to-top'],
  [
    '@vssue/vuepress-plugin-vssue', {
      // 设置 `platform` 而不是 `api`
      platform: 'github-v4',
      // 其他的 Vssue 配置
      owner: 'chuanxinLiu',
      repo: 'xBlog',
      clientId: secret.clientId,
      clientSecret: secret.clientSecret,
      autoCreateIssue: true
    }
  ],
  [
    '@vuepress/medium-zoom', {
      selector: 'img'
    }
  ]
]