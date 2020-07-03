import { defineConfig } from 'dumi';

export default defineConfig({
  mode: 'site',
  title: 'react 组件库',
  description: '一个简洁风格的组件库',
  logo: 'https://simple-ui.netlify.app//logo.png',
  favicon: 'https://simple-ui.netlify.app//logo.png',
  locales: [
    ['en-US', 'EN'],
    ['zh-CN', '中文'],
  ],
  alias: {
    '@components': '/components',
  },
  menus: {
    '/component': [
      {
        title: '基础布局',
        children: ['component/grid'],
      },
      {
        title: '通用组件',
        children: ['component/button'],
      },
      {
        title: '导航组件',
        children: ['component/affix', 'component/menu', 'component/pager'],
      },
      {
        title: '表单组件',
        children: ['component/input', 'component/cascader'],
      },
    ],
    '/guide': [
      {
        title: '使用文档',
        children: ['guide/index', 'guide/color'],
      },
    ],
  },
  navs: [
    { title: '文档', path: '/guide' },
    { title: '组件库', path: '/component' },
    { title: 'GitHub', path: 'https://github.com/suchengyong/simple-react-ui' },
  ],
  extraBabelPlugins: [
    [
      'import',
      {
        libraryName: 'simple-react',
        libraryDirectory: 'es',
        style: 'css',
      },
    ],
  ],
});
