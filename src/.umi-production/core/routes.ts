// @ts-nocheck
import { ApplyPluginsType } from '/Users/suchengyong/Desktop/products/simple-react-ui/node_modules/_@umijs_runtime@3.2.9@@umijs/runtime';
import { plugin } from './plugin';

const routes = [
  {
    "path": "/",
    "component": (props) => require('react').createElement(require('../../../node_modules/_@umijs_preset-dumi@1.0.33@@umijs/preset-dumi/lib/themes/default/layout.js').default, {
      ...{"menus":{"*":{"*":[{"path":"/","title":"首页介绍","meta":{"order":1}}],"/component":[{"title":"基础布局","children":[{"path":"/component/grid","title":"Grid 栅格"}]},{"title":"通用组件","children":[{"path":"/component/button","title":"Button 按钮"}]},{"title":"导航组件","children":[{"path":"/component/affix","title":"Affix 滚动自顶部固定"},{"path":"/component/menu","title":"Menu 导航菜单"},{"path":"/component/pager","title":"Pager 分页"}]},{"title":"表单组件","children":[{"path":"/component/input","title":"Input 输入框"},{"path":"/component/cascader","title":"Cascader 级联选择"},{"path":"/component/checkbox","title":"CheckBox 选择框"},{"path":"/component/datepicker","title":"DatePicker 日期选择"},{"path":"/component/radio","title":"Radio 单选框"},{"path":"/component/rate","title":"Rate 评分"},{"path":"/component/switch","title":"Switch 开关"}]},{"title":"数据展示","children":[{"path":"/component/collapse","title":"Collapse 折叠面板"},{"path":"/component/popover","title":"Popover 气泡卡片"},{"path":"/component/slides","title":"Slides 轮播"},{"path":"/component/tabs","title":"Tabs 标签页"}]},{"title":"信息反馈","children":[{"path":"/component/message","title":"Message 全局提示"},{"path":"/component/modal","title":"Modal 对话框"},{"path":"/component/spin","title":"Spin 加载中"},{"path":"/component/lightup","title":"LightUp 图片预览"},{"path":"/component/scroll","title":"Scroll 滚动条"}]}],"/guide":[{"title":"使用文档","children":[{"path":"/guide","title":"开始使用"},{"path":"/guide/color","title":"Color 色彩搭配"}]}]}},"locales":[],"navs":{"*":[{"title":"文档","path":"/guide"},{"title":"组件库","path":"/component"},{"title":"GitHub","path":"https://github.com/suchengyong/simple-react-ui"}]},"title":"react 组件库","logo":"https://simple-ui.netlify.app//logo.png","desc":"一个简洁风格的组件库","mode":"site"},
      ...props,
    }),
    "routes": [
      {
        "path": "/",
        "component": require('../../../docs/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/index.md",
          "updatedTime": 1589369683000,
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
        "path": "/component/affix",
        "component": require('../../../docs/component/affix.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/component/affix.md",
          "updatedTime": 1593765812000,
          "group": {
            "title": "组件",
            "path": "/component"
          },
          "order": 7,
          "slugs": [
            {
              "depth": 1,
              "value": "Affix 滚动自顶部固定",
              "heading": "affix-滚动自顶部固定"
            },
            {
              "depth": 2,
              "value": "何时使用",
              "heading": "何时使用"
            },
            {
              "depth": 2,
              "value": "代码示例",
              "heading": "代码示例"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            }
          ],
          "title": "Affix 滚动自顶部固定",
          "nav": {
            "path": "/component",
            "title": "Component"
          }
        },
        "title": "Affix 滚动自顶部固定"
      },
      {
        "path": "/component/button",
        "component": require('../../../docs/component/button.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/component/button.md",
          "updatedTime": 1589364113000,
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
        "path": "/component/cascader",
        "component": require('../../../docs/component/cascader.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/component/cascader.md",
          "updatedTime": 1593765812000,
          "group": {
            "title": "组件",
            "path": "/component"
          },
          "order": 10,
          "slugs": [
            {
              "depth": 1,
              "value": "Cascader 级联选择",
              "heading": "cascader-级联选择"
            },
            {
              "depth": 2,
              "value": "何时使用",
              "heading": "何时使用"
            },
            {
              "depth": 2,
              "value": "代码示例",
              "heading": "代码示例"
            },
            {
              "depth": 3,
              "value": "API",
              "heading": "api"
            },
            {
              "depth": 4,
              "value": "Cascader",
              "heading": "cascader"
            },
            {
              "depth": 4,
              "value": "Option",
              "heading": "option"
            }
          ],
          "title": "Cascader 级联选择",
          "nav": {
            "path": "/component",
            "title": "Component"
          }
        },
        "title": "Cascader 级联选择"
      },
      {
        "path": "/component/checkbox",
        "component": require('../../../docs/component/checkbox.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/component/checkbox.md",
          "updatedTime": 1594292677000,
          "group": {
            "title": "组件",
            "path": "/component"
          },
          "order": 11,
          "slugs": [
            {
              "depth": 1,
              "value": "CheckBox 选择框",
              "heading": "checkbox-选择框"
            },
            {
              "depth": 2,
              "value": "何时使用",
              "heading": "何时使用"
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
              "depth": 2,
              "value": "API",
              "heading": "api"
            },
            {
              "depth": 4,
              "value": "CheckBox",
              "heading": "checkbox"
            },
            {
              "depth": 4,
              "value": "CheckBoxGroup",
              "heading": "checkboxgroup"
            },
            {
              "depth": 4,
              "value": "Option",
              "heading": "option"
            }
          ],
          "title": "CheckBox 选择框",
          "nav": {
            "path": "/component",
            "title": "Component"
          }
        },
        "title": "CheckBox 选择框"
      },
      {
        "path": "/component/collapse",
        "component": require('../../../docs/component/collapse.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/component/collapse.md",
          "updatedTime": 1594292677000,
          "group": {
            "title": "组件",
            "path": "/component"
          },
          "order": 16,
          "slugs": [
            {
              "depth": 1,
              "value": "Collapse 折叠面板",
              "heading": "collapse-折叠面板"
            },
            {
              "depth": 2,
              "value": "何时使用",
              "heading": "何时使用"
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
              "depth": 3,
              "value": "API",
              "heading": "api"
            },
            {
              "depth": 4,
              "value": "Collapse",
              "heading": "collapse"
            },
            {
              "depth": 4,
              "value": "Collapse",
              "heading": "collapse-1"
            }
          ],
          "title": "Collapse 折叠面板",
          "nav": {
            "path": "/component",
            "title": "Component"
          }
        },
        "title": "Collapse 折叠面板"
      },
      {
        "path": "/component/datepicker",
        "component": require('../../../docs/component/datepicker.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/component/datepicker.md",
          "updatedTime": 1594292677000,
          "group": {
            "title": "组件",
            "path": "/component"
          },
          "order": 12,
          "slugs": [
            {
              "depth": 1,
              "value": "DatePicker 日期选择",
              "heading": "datepicker-日期选择"
            },
            {
              "depth": 2,
              "value": "何时使用",
              "heading": "何时使用"
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
              "depth": 2,
              "value": "API",
              "heading": "api"
            }
          ],
          "title": "DatePicker 日期选择",
          "nav": {
            "path": "/component",
            "title": "Component"
          }
        },
        "title": "DatePicker 日期选择"
      },
      {
        "path": "/component/grid",
        "component": require('../../../docs/component/grid.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/component/grid.md",
          "updatedTime": 1589364113000,
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
        "component": require('../../../docs/component/input.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/component/input.md",
          "updatedTime": 1589364113000,
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
        "path": "/component/lightup",
        "component": require('../../../docs/component/lightup.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/component/lightup.md",
          "updatedTime": 1594292677000,
          "group": {
            "title": "组件",
            "path": "/component"
          },
          "order": 23,
          "slugs": [
            {
              "depth": 1,
              "value": "LightUp 图片预览",
              "heading": "lightup-图片预览"
            },
            {
              "depth": 2,
              "value": "何时使用",
              "heading": "何时使用"
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
              "depth": 2,
              "value": "API",
              "heading": "api"
            }
          ],
          "title": "LightUp 图片预览",
          "nav": {
            "path": "/component",
            "title": "Component"
          }
        },
        "title": "LightUp 图片预览"
      },
      {
        "path": "/component/menu",
        "component": require('../../../docs/component/menu.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/component/menu.md",
          "updatedTime": 1593765812000,
          "group": {
            "title": "组件",
            "path": "/component"
          },
          "order": 8,
          "slugs": [
            {
              "depth": 1,
              "value": "Menu 导航菜单",
              "heading": "menu-导航菜单"
            },
            {
              "depth": 2,
              "value": "何时使用",
              "heading": "何时使用"
            },
            {
              "depth": 2,
              "value": "代码示例",
              "heading": "代码示例"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            },
            {
              "depth": 3,
              "value": "Menu",
              "heading": "menu"
            },
            {
              "depth": 3,
              "value": "SubMenu",
              "heading": "submenu"
            },
            {
              "depth": 3,
              "value": "MenuItem",
              "heading": "menuitem"
            }
          ],
          "title": "Menu 导航菜单",
          "nav": {
            "path": "/component",
            "title": "Component"
          }
        },
        "title": "Menu 导航菜单"
      },
      {
        "path": "/component/message",
        "component": require('../../../docs/component/message.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/component/message.md",
          "updatedTime": 1594292677000,
          "group": {
            "title": "组件",
            "path": "/component"
          },
          "order": 20,
          "slugs": [
            {
              "depth": 1,
              "value": "Message 全局提示",
              "heading": "message-全局提示"
            },
            {
              "depth": 2,
              "value": "何时使用",
              "heading": "何时使用"
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
              "depth": 2,
              "value": "API",
              "heading": "api"
            },
            {
              "depth": 3,
              "value": "Options",
              "heading": "options"
            }
          ],
          "title": "Message 全局提示",
          "nav": {
            "path": "/component",
            "title": "Component"
          }
        },
        "title": "Message 全局提示"
      },
      {
        "path": "/component/modal",
        "component": require('../../../docs/component/modal.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/component/modal.md",
          "updatedTime": 1594292677000,
          "group": {
            "title": "组件",
            "path": "/component"
          },
          "order": 21,
          "slugs": [
            {
              "depth": 1,
              "value": "Modal 对话框",
              "heading": "modal-对话框"
            },
            {
              "depth": 2,
              "value": "何时使用",
              "heading": "何时使用"
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
              "depth": 2,
              "value": "API",
              "heading": "api"
            },
            {
              "depth": 3,
              "value": "Options",
              "heading": "options"
            }
          ],
          "title": "Modal 对话框",
          "nav": {
            "path": "/component",
            "title": "Component"
          }
        },
        "title": "Modal 对话框"
      },
      {
        "path": "/component/pager",
        "component": require('../../../docs/component/pager.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/component/pager.md",
          "updatedTime": 1593765812000,
          "group": {
            "title": "组件",
            "path": "/component"
          },
          "order": 9,
          "slugs": [
            {
              "depth": 1,
              "value": "Pager 分页",
              "heading": "pager-分页"
            },
            {
              "depth": 2,
              "value": "何时使用",
              "heading": "何时使用"
            },
            {
              "depth": 2,
              "value": "代码示例",
              "heading": "代码示例"
            },
            {
              "depth": 3,
              "value": "API",
              "heading": "api"
            }
          ],
          "title": "Pager 分页",
          "nav": {
            "path": "/component",
            "title": "Component"
          }
        },
        "title": "Pager 分页"
      },
      {
        "path": "/component/popover",
        "component": require('../../../docs/component/popover.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/component/popover.md",
          "updatedTime": 1594292677000,
          "group": {
            "title": "组件",
            "path": "/component"
          },
          "order": 17,
          "slugs": [
            {
              "depth": 1,
              "value": "Popover 气泡卡片",
              "heading": "popover-气泡卡片"
            },
            {
              "depth": 2,
              "value": "何时使用",
              "heading": "何时使用"
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
              "depth": 2,
              "value": "API",
              "heading": "api"
            }
          ],
          "title": "Popover 气泡卡片",
          "nav": {
            "path": "/component",
            "title": "Component"
          }
        },
        "title": "Popover 气泡卡片"
      },
      {
        "path": "/component/radio",
        "component": require('../../../docs/component/radio.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/component/radio.md",
          "updatedTime": 1594292677000,
          "group": {
            "title": "组件",
            "path": "/component"
          },
          "order": 13,
          "slugs": [
            {
              "depth": 1,
              "value": "Radio 单选框",
              "heading": "radio-单选框"
            },
            {
              "depth": 2,
              "value": "何时使用",
              "heading": "何时使用"
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
              "depth": 2,
              "value": "API",
              "heading": "api"
            },
            {
              "depth": 3,
              "value": "Radio",
              "heading": "radio"
            },
            {
              "depth": 3,
              "value": "Option",
              "heading": "option"
            }
          ],
          "title": "Radio 单选框",
          "nav": {
            "path": "/component",
            "title": "Component"
          }
        },
        "title": "Radio 单选框"
      },
      {
        "path": "/component/rate",
        "component": require('../../../docs/component/rate.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/component/rate.md",
          "updatedTime": 1594292677000,
          "group": {
            "title": "组件",
            "path": "/component"
          },
          "order": 14,
          "slugs": [
            {
              "depth": 1,
              "value": "Rate 评分",
              "heading": "rate-评分"
            },
            {
              "depth": 2,
              "value": "何时使用",
              "heading": "何时使用"
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
              "depth": 3,
              "value": "API",
              "heading": "api"
            }
          ],
          "title": "Rate 评分",
          "nav": {
            "path": "/component",
            "title": "Component"
          }
        },
        "title": "Rate 评分"
      },
      {
        "path": "/component/scroll",
        "component": require('../../../docs/component/scroll.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/component/scroll.md",
          "updatedTime": 1594292677000,
          "group": {
            "title": "组件",
            "path": "/component"
          },
          "order": 24,
          "slugs": [
            {
              "depth": 1,
              "value": "Scroll 滚动条",
              "heading": "scroll-滚动条"
            },
            {
              "depth": 2,
              "value": "何时使用",
              "heading": "何时使用"
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
              "depth": 2,
              "value": "API",
              "heading": "api"
            }
          ],
          "title": "Scroll 滚动条",
          "nav": {
            "path": "/component",
            "title": "Component"
          }
        },
        "title": "Scroll 滚动条"
      },
      {
        "path": "/component/slides",
        "component": require('../../../docs/component/slides.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/component/slides.md",
          "updatedTime": 1594292677000,
          "group": {
            "title": "组件",
            "path": "/component"
          },
          "order": 18,
          "slugs": [
            {
              "depth": 1,
              "value": "Slides 轮播",
              "heading": "slides-轮播"
            },
            {
              "depth": 2,
              "value": "何时使用",
              "heading": "何时使用"
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
              "depth": 2,
              "value": "API",
              "heading": "api"
            },
            {
              "depth": 3,
              "value": "Method",
              "heading": "method"
            }
          ],
          "title": "Slides 轮播",
          "nav": {
            "path": "/component",
            "title": "Component"
          }
        },
        "title": "Slides 轮播"
      },
      {
        "path": "/component/spin",
        "component": require('../../../docs/component/spin.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/component/spin.md",
          "updatedTime": 1594292677000,
          "group": {
            "title": "组件",
            "path": "/component"
          },
          "order": 22,
          "slugs": [
            {
              "depth": 1,
              "value": "Spin 加载中",
              "heading": "spin-加载中"
            },
            {
              "depth": 2,
              "value": "何时使用",
              "heading": "何时使用"
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
              "depth": 2,
              "value": "API",
              "heading": "api"
            }
          ],
          "title": "Spin 加载中",
          "nav": {
            "path": "/component",
            "title": "Component"
          }
        },
        "title": "Spin 加载中"
      },
      {
        "path": "/component/switch",
        "component": require('../../../docs/component/switch.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/component/switch.md",
          "updatedTime": 1594292677000,
          "group": {
            "title": "组件",
            "path": "/component"
          },
          "order": 15,
          "slugs": [
            {
              "depth": 1,
              "value": "Switch 开关",
              "heading": "switch-开关"
            },
            {
              "depth": 2,
              "value": "何时使用",
              "heading": "何时使用"
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
              "depth": 3,
              "value": "API",
              "heading": "api"
            }
          ],
          "title": "Switch 开关",
          "nav": {
            "path": "/component",
            "title": "Component"
          }
        },
        "title": "Switch 开关"
      },
      {
        "path": "/component/tabs",
        "component": require('../../../docs/component/tabs.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/component/tabs.md",
          "updatedTime": 1594292677000,
          "group": {
            "title": "组件",
            "path": "/component"
          },
          "order": 19,
          "slugs": [
            {
              "depth": 1,
              "value": "Tabs 标签页",
              "heading": "tabs-标签页"
            },
            {
              "depth": 2,
              "value": "何时使用",
              "heading": "何时使用"
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
              "depth": 2,
              "value": "API",
              "heading": "api"
            },
            {
              "depth": 3,
              "value": "Tabs",
              "heading": "tabs"
            },
            {
              "depth": 3,
              "value": "TabPane",
              "heading": "tabpane"
            }
          ],
          "title": "Tabs 标签页",
          "nav": {
            "path": "/component",
            "title": "Component"
          }
        },
        "title": "Tabs 标签页"
      },
      {
        "path": "/guide/color",
        "component": require('../../../docs/guide/color.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/guide/color.md",
          "updatedTime": 1591618804000,
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
        "component": require('../../../docs/guide/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/guide/index.md",
          "updatedTime": 1591618804000,
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
        "redirect": "/component/grid"
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
