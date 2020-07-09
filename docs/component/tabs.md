---
group:
  title: 组件
order: 19
---

# Tabs 标签页

## 何时使用

平级区域大块内容的的收纳和展现。

## 代码示例:

#### 基本用法

```tsx
import React from 'react';
import { Tabs, TabPane } from '../../lib/simple-react.js';
import '../../lib/simple-react.css';
import './style/index.css';
export default () => {
  return (
    <div>
      <Tabs>
        <TabPane title="Tab1" key="1">
          <div>Content of Tab Pane 1</div>
        </TabPane>
        <TabPane title="Tab2" key="2">
          <div>Content of Tab Pane 2</div>
        </TabPane>
        <TabPane title="Tab3" key="3">
          <div>Content of Tab Pane 3</div>
        </TabPane>
      </Tabs>
    </div>
  );
};
```

禁用某一项。

```tsx
import React from 'react';
import { Tabs, TabPane } from '../../lib/simple-react.js';
import '../../lib/simple-react.css';
import './style/index.css';
export default () => {
  return (
    <div>
      <Tabs>
        <TabPane title="Tab1" key="1">
          <div>Content of Tab Pane 1</div>
        </TabPane>
        <TabPane title="Tab2" key="2" disabled={true}>
          <div>Content of Tab Pane 2</div>
        </TabPane>
        <TabPane title="Tab3" key="3">
          <div>Content of Tab Pane 3</div>
        </TabPane>
      </Tabs>
    </div>
  );
};
```

垂直排列。

```tsx
import React from 'react';
import { Tabs, TabPane } from '../../lib/simple-react.js';
import '../../lib/simple-react.css';
import './style/index.css';
export default () => {
  return (
    <div>
      <Tabs vertical={true}>
        <TabPane title="Tab1" key="1">
          <div>Content of Tab Pane 1</div>
        </TabPane>
        <TabPane title="Tab2" key="2">
          <div>Content of Tab Pane 2</div>
        </TabPane>
        <TabPane title="Tab3" key="3">
          <div>Content of Tab Pane 3</div>
        </TabPane>
      </Tabs>
    </div>
  );
};
```

## API

### Tabs

| 参数             | 说明                 | 类型                       | 默认值 |
| ---------------- | -------------------- | -------------------------- | ------ |
| activeKey        | 当前激活面板的 key   | string                     | --     |
| defaultActiveKey | 默认激活面板的 key   | string                     | --     |
| vertical         | 垂直排列             | boolean                    | false  |
| onChange         | 激活面板改变时的回调 | (activeKey: string) => any | --     |
| className        | 自定义 Tabs 类名     | string                     | --     |
| style            | 自定义 Tabs 样式     | React.CSSProperties        | --     |

### TabPane

| 参数      | 说明               | 类型                | 默认值 |
| --------- | ------------------ | ------------------- | ------ |
| key       | 唯一标志           | string              | --     |
| title     | 对应的选项卡头内容 | string              | --     |
| disabled  | 禁用状态           | boolean             | false  |
| className | 自定义 abPane 类名 | string              | --     |
| style     | 自定义 abPane 样式 | React.CSSProperties | --     |
