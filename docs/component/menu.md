---
group:
  title: 组件
order: 8
---

# Menu 导航菜单

页面提供导航的菜单列表。

## 何时使用

网站顶部和左侧的导航。

## 代码示例

```tsx
import React from 'react';
import { Menu, SubMenu, MenuItem } from '../../lib/simple-react.js';
import '../../lib/simple-react.css';
export default () => {
  return (
    <div>
      <Menu mode="horizontal">
        <MenuItem key="item1">导航菜单1</MenuItem>
        <MenuItem key="item2">导航菜单2</MenuItem>
        <MenuItem key="item3">导航菜单3</MenuItem>
        <SubMenu key="sub" title="导航菜单4">
          <MenuItem key="item4">导航菜单4</MenuItem>
          <MenuItem key="item5">导航菜单4</MenuItem>
          <MenuItem key="item6">导航菜单4</MenuItem>
        </SubMenu>
      </Menu>
    </div>
  );
};
```

```tsx
import React from 'react';
import { Menu, SubMenu, MenuItem } from '../../lib/simple-react.js';
import '../../lib/simple-react.css';
import './style/index.css';
export default () => {
  return (
    <div>
      <Menu mode="vertical" theme="dark" className="menuWidth">
        <MenuItem key="item1">导航菜单1</MenuItem>
        <MenuItem key="item2">导航菜单2</MenuItem>
        <MenuItem key="item3">导航菜单3</MenuItem>
        <SubMenu key="sub1" title="导航菜单4">
          <MenuItem key="item4">菜单4</MenuItem>
          <MenuItem key="item5">菜单4</MenuItem>
          <MenuItem key="item6">菜单4</MenuItem>
        </SubMenu>
        <SubMenu key="sub2" title="导航菜单5">
          <MenuItem key="item7">导航菜单5</MenuItem>
          <MenuItem key="item8">导航菜单5</MenuItem>
          <MenuItem key="item9">导航菜单5</MenuItem>
        </SubMenu>
      </Menu>
    </div>
  );
};
```

## API

### Menu

| 参数               | 说明                      | 类型                                              | 默认值        |
| ------------------ | ------------------------- | ------------------------------------------------- | ------------- |
| selectedKey        | 当前激活子选项的 key      | string                                            | --            |
| expandKeys         | 当前展开子菜单的 key 数组 | string                                            | --            |
| defaultSelectedKey | 默认激活子选项的 key      | string                                            | --            |
| defaultExpandKeys  | 默认展开子菜单的 key 数组 | Array                                             | --            |
| mode               | 菜单类型                  | "'vertical'                                       | 'horizontal'" | 'vertical' |
| theme              | 主题颜色                  | "'light'                                          | 'dark'"       | 'light' |
| onSelectedChange   | 激活子选项改变时的回调    | (selectedKey: string, expandKeys:string[]) => any | --            |
| onExpandChange     | 展开子菜单改变时的回调    | (expandKeys: string[]) => any                     | --            |
| className          | 自定义 Menu 类名          | string                                            | --            |
| style              | 自定义 Menu 样式          | React.CSSProperties                               | --            |

### SubMenu

| 参数      | 说明                                                                                   | 类型                | 默认值           |
| --------- | -------------------------------------------------------------------------------------- | ------------------- | ---------------- |
| key       | 唯一标志                                                                               | string              | --               |
| title     | 子菜单标题                                                                             | "string             | React.ReactNode" | -- |
| showArrow | 是否展示子菜单的箭头图标                                                               | boolean             | true             |
| itemGroup | 是否开启子菜单的分组模式，这种模式下，子菜单样式将有所不同，默认展开且不再响应点击事件 | boolean             | false            |
| className | 自定义子菜单标题类名                                                                   | string              | --               |
| style     | 自定义子菜单标题样式                                                                   | React.CSSProperties | --               |

### MenuItem

| 参数      | 说明             | 类型                | 默认值 |
| --------- | ---------------- | ------------------- | ------ |
| key       | 唯一标志         | string              | --     |
| className | 自定义子选项类名 | string              | --     |
| style     | 自定义子选项样式 | React.CSSProperties | --     |
