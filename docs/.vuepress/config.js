const moment = require('moment');

module.exports = {
  base:'/xBlog/',
  title:'鑫Blog',
  description:'鑫博客，记录个人工作学习整理的知识库网站',
  head: [
    ['link', { rel: 'icon', href: '/assets/img/logo.png' }],
    ['meta', { rel: 'author', content: '刘传鑫' }],
    ['meta', { rel: 'Keywords', content: '博客，Blog,文档，知识，笔记，学习' }]
  ],
  themeConfig: {
    logo: '/assets/img/logo.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Home',  items: [
        { text: 'Chinese', link: '/language/chinese' },
        { text: 'Japanese', link: '/language/japanese' }
      ] },
      { text: 'About', link: '/about/about' },
      { text: 'CSDN', link: 'https://blog.csdn.net/qq_42374233' },
      { text: 'GitHub', link: 'https://github.com/chuanxinLiu/' },
      
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
    ]
  ]
}