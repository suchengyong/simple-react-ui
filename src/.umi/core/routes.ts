import { ApplyPluginsType } from '/Users/suchengyong/Desktop/products/simple-react-ui/node_modules/@umijs/runtime';
import { plugin } from './plugin';

const routes = [
  {
    "path": "/",
    "component": (props) => require('react').createElement(require('/Users/suchengyong/Desktop/products/simple-react-ui/node_modules/@umijs/preset-dumi/lib/themes/default/layout.js').default, {
      ...{"menus":{"*":{"*":[{"path":"/","title":"首页介绍","meta":{"order":1}}],"/component":[{"title":"通用组件","children":[{"path":"/component/button","title":"Button 按钮"},{"path":"/component/grid","title":"Grid 栅格"},{"path":"/component/input","title":"Input 输入框"}]}],"/guide":[{"title":"使用文档","children":[{"path":"/guide","title":"开始使用"},{"path":"/guide/color","title":"Color 色彩搭配"}]}]}},"locales":[],"navs":{"*":[{"title":"文档","path":"/guide"},{"title":"组件库","path":"/component"},{"title":"GitHub","path":"https://github.com/suchengyong/simple-react-ui"}]},"title":"react 组件库","logo":"https://simple-ui.netlify.app//logo.png","desc":"一个简洁风格的组件库","mode":"site"},
      ...props,
    }),
    "routes": [
      {
        "path": "/",
        "component": require('/Users/suchengyong/Desktop/products/simple-react-ui/docs/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/index.md",
          "updatedTime": null,
          "title": "首页介绍",
          "order": 1,
          "hero": {
            "title": "simple-ui",
            "desc": "<div class=\"markdown\"><p>一个简洁风格的react组件库</p></div>",
            "actions": [
              {
                "text": "快速上手",
                "link": "/guide"
              }
            ]
          },
          "slugs": [
            {
              "depth": 2,
              "value": "轻松上手",
              "heading": "轻松上手"
            },
            {
              "depth": 2,
              "value": "简单使用",
              "heading": "简单使用"
            }
          ]
        },
        "title": "首页介绍"
      },
      {
        "path": "/component/button",
        "component": require('/Users/suchengyong/Desktop/products/simple-react-ui/docs/component/button.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/component/button.md",
          "updatedTime": null,
          "group": {
            "title": "组件",
            "path": "/component"
          },
          "order": 4,
          "slugs": [
            {
              "depth": 1,
              "value": "Button 按钮",
              "heading": "button-按钮"
            },
            {
              "depth": 2,
              "value": "代码示例:",
              "heading": "代码示例"
            },
            {
              "depth": 4,
              "value": "按钮类型",
              "heading": "按钮类型"
            },
            {
              "depth": 4,
              "value": "Disabled 和 Loading 状态",
              "heading": "disabled-和-loading-状态"
            },
            {
              "depth": 4,
              "value": "按钮尺寸",
              "heading": "按钮尺寸"
            },
            {
              "depth": 4,
              "value": "按钮组合",
              "heading": "按钮组合"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            }
          ],
          "title": "Button 按钮",
          "nav": {
            "path": "/component",
            "title": "Component"
          }
        },
        "title": "Button 按钮"
      },
      {
        "path": "/component/grid",
        "component": require('/Users/suchengyong/Desktop/products/simple-react-ui/docs/component/grid.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/component/grid.md",
          "updatedTime": null,
          "group": {
            "title": "组件",
            "path": "/component"
          },
          "order": 5,
          "slugs": [
            {
              "depth": 1,
              "value": "Grid 栅格",
              "heading": "grid-栅格"
            },
            {
              "depth": 2,
              "value": "代码示例:",
              "heading": "代码示例"
            },
            {
              "depth": 4,
              "value": "基础栅格",
              "heading": "基础栅格"
            },
            {
              "depth": 4,
              "value": "区块偏移",
              "heading": "区块偏移"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            },
            {
              "depth": 3,
              "value": "Row",
              "heading": "row"
            },
            {
              "depth": 3,
              "value": "Col",
              "heading": "col"
            }
          ],
          "title": "Grid 栅格",
          "nav": {
            "path": "/component",
            "title": "Component"
          }
        },
        "title": "Grid 栅格"
      },
      {
        "path": "/component/input",
        "component": require('/Users/suchengyong/Desktop/products/simple-react-ui/docs/component/input.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/component/input.md",
          "updatedTime": null,
          "group": {
            "title": "组件",
            "path": "/component"
          },
          "order": 6,
          "slugs": [
            {
              "depth": 1,
              "value": "Input 输入框",
              "heading": "input-输入框"
            },
            {
              "depth": 2,
              "value": "代码示例:",
              "heading": "代码示例"
            },
            {
              "depth": 4,
              "value": "基本用法",
              "heading": "基本用法"
            },
            {
              "depth": 4,
              "value": "前置 / 后置标",
              "heading": "前置--后置标"
            },
            {
              "depth": 4,
              "value": "前缀 / 后缀标签",
              "heading": "前缀--后缀标签"
            },
            {
              "depth": 4,
              "value": "错误",
              "heading": "错误"
            },
            {
              "depth": 4,
              "value": "搜索框",
              "heading": "搜索框"
            },
            {
              "depth": 4,
              "value": "搜索框",
              "heading": "搜索框-1"
            },
            {
              "depth": 4,
              "value": "文本输入框",
              "heading": "文本输入框"
            },
            {
              "depth": 4,
              "value": "文本输入框自适应",
              "heading": "文本输入框自适应"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            },
            {
              "depth": 3,
              "value": "Input",
              "heading": "input"
            },
            {
              "depth": 3,
              "value": "Search",
              "heading": "search"
            },
            {
              "depth": 3,
              "value": "Textarea",
              "heading": "textarea"
            },
            {
              "depth": 3,
              "value": "Method",
              "heading": "method"
            }
          ],
          "title": "Input 输入框",
          "nav": {
            "path": "/component",
            "title": "Component"
          }
        },
        "title": "Input 输入框"
      },
      {
        "path": "/guide/color",
        "component": require('/Users/suchengyong/Desktop/products/simple-react-ui/docs/guide/color.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/guide/color.md",
          "updatedTime": null,
          "group": {
            "title": "文档说明",
            "path": "/guide"
          },
          "order": 3,
          "slugs": [
            {
              "depth": 2,
              "value": "Color 色彩搭配",
              "heading": "color-色彩搭配"
            },
            {
              "depth": 3,
              "value": "主色",
              "heading": "主色"
            },
            {
              "depth": 3,
              "value": "功能色",
              "heading": "功能色"
            },
            {
              "depth": 3,
              "value": "中性色",
              "heading": "中性色"
            }
          ],
          "title": "Color 色彩搭配",
          "nav": {
            "path": "/guide",
            "title": "Guide"
          }
        },
        "title": "Color 色彩搭配"
      },
      {
        "path": "/guide",
        "component": require('/Users/suchengyong/Desktop/products/simple-react-ui/docs/guide/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/guide/index.md",
          "updatedTime": null,
          "group": {
            "title": "文档说明",
            "path": "/guide"
          },
          "order": 2,
          "slugs": [
            {
              "depth": 2,
              "value": "开始使用",
              "heading": "开始使用"
            },
            {
              "depth": 3,
              "value": "使用 TypeScript",
              "heading": "使用-typescript"
            },
            {
              "depth": 3,
              "value": "没有额外依赖",
              "heading": "没有额外依赖"
            },
            {
              "depth": 3,
              "value": "简单示例",
              "heading": "简单示例"
            }
          ],
          "title": "开始使用",
          "nav": {
            "path": "/guide",
            "title": "Guide"
          }
        },
        "title": "开始使用"
      },
      {
        "path": "/component",
        "meta": {},
        "exact": true,
        "redirect": "/component/button"
      }
    ],
    "title": "react 组件库"
  }
];

// allow user to extend routes
plugin.applyPlugins({
  key: 'patchRoutes',
  type: ApplyPluginsType.event,
  args: { routes },
});

export { routes };
