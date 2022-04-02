module.exports = {
  logo: '/favicon.ico',
  nav: [{
      text: '首页',
      link: '/'
    },
    {
      text: '面试题',
      items: [
        { text: 'Java基础', items: [
          { text: '语法基础', link: '/interview/语法基础' },
          { text: 'Japanese', link: '/language/japanese/' }
        ] }
      ]
    },
    {
      text: '关于我',
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
}