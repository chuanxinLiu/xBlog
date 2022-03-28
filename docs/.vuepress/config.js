const moment = require('moment');

module.exports = {
  base: '/xBlog/',
  title: '鑫Blog',
  description: '鑫博客，记录个人工作学习整理的知识库网站',
  head: [
    ['link', {
      rel: 'icon',
      href: '/assets/img/logo.png'
    }],
    ['meta', {
      rel: 'author',
      content: '刘传鑫'
    }],
    ['meta', {
      rel: 'Keywords',
      content: '博客，Blog,文档，知识，笔记，学习'
    }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: '/icons/apple-touch-icon-152x152.png' }],
    ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
  themeConfig: {
    logo: '/favicon.ico',
    nav: [{
        text: 'Home',
        link: '/'
      },
      {
        text: 'Home',
        items: [{
            text: 'Chinese',
            link: '/language/chinese'
          },
          {
            text: 'Japanese',
            link: '/language/japanese'
          }
        ]
      },
      {
        text: 'About',
        link: '/about/about'
      },
      {
        text: 'CSDN',
        link: 'https://blog.csdn.net/qq_42374233'
      },
      {
        text: 'GitHub',
        link: 'https://github.com/chuanxinLiu/'
      },

    ],
    sidebar: 'auto',
    lastUpdated: '最后更新',
  },
  plugins: [
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
    ]
  ]
}