const headconfig =require('./config/headConfig');
const themeconfig =require('./config/themeConfig');
const pluginsconfig =require('./config/pluginsConfig');


module.exports = {
  base: '/xBlog/',
  title: '鑫Blog',
  description: '鑫博客，记录个人工作学习整理的知识库网站',
  head: headconfig,
  themeConfig: themeconfig,
  plugins: pluginsconfig
}