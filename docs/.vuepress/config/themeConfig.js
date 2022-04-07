module.exports = {
  logo: '/favicon.ico',
  nav: [{
      text: '首页',
      link: '/'
    },
    {
      text: '面试题',
      items: [
        { text: 'Java', items: [
          { text: '基础', link: '/interview/基础' },
          { text: '类加载', link: '/interview/类加载' },
          { text: 'JVM', link: '/interview/JVM' }
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
  // 默认值是 true 。设置为 false 来禁用所有页面的 下一篇 链接
  nextLinks: true,
  // 默认值是 true 。设置为 false 来禁用所有页面的 上一篇 链接
  prevLinks: true
}