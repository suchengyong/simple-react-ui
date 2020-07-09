---
group:
  title: 组件
order: 16
---

# Collapse 折叠面板

## 何时使用

对复杂区域进行分组和隐藏时。 手风琴是一种特殊的折叠面板，只允许单个面板展开。

## 代码示例:

#### 基本用法

可同时展开多个面板。

```tsx
import React from 'react';
import { Collapse, Panel } from '../../lib/simple-react.js';
import '../../lib/simple-react.css';
export default () => {
  return (
    <div>
      <Collapse onChange={key => console.log(key)}>
        <Panel header="Header1" key="1">
          <div>Content of Panel 1</div>
        </Panel>
        <Panel header="Header2" key="2">
          <div>Content of Panel 2</div>
        </Panel>
        <Panel header="Header3" key="3">
          <div>Content of Panel 3</div>
        </Panel>
      </Collapse>
    </div>
  );
};
```

每次只展开一个面板。

```tsx
import React from 'react';
import { Collapse, Panel } from '../../lib/simple-react.js';
import '../../lib/simple-react.css';
export default () => {
  return (
    <div>
      <Collapse accordion={true} onChange={key => console.log(key)}>
        <Panel header="Header1" key="1">
          <div>Content of Panel 1</div>
        </Panel>
        <Panel header="Header2" key="2">
          <div>Content of Panel 2</div>
        </Panel>
        <Panel header="Header3" key="3">
          <div>Content of Panel 3</div>
        </Panel>
      </Collapse>
    </div>
  );
};
```

### API

#### Collapse

| 参数             | 说明                             | 类型                                              | 默认值 |
| ---------------- | -------------------------------- | ------------------------------------------------- | ------ |
| activeKey        | 当前展开面板 key 的数组          | string[]                                          | --     |
| defaultActiveKey | 默认展开面板 key 的数组          | string[]                                          | false  |
| accordion        | 手风琴模式                       | boolean                                           | false  |
| showArrow        | 是否展示面板头的箭头图标         | boolean                                           | true   |
| onChange         | 点击面板头导致展开项改变时的回调 | (activeKey: string[], e: React.MouseEvent) => any | --     |
| className        | 自定义 Collapse 类名             | string                                            | --     |
| style            | 自定义 Collapse 样式             | React.CSSProperties                               | --     |

#### Collapse

| 参数      | 说明                     | 类型                | 默认值 |
| --------- | ------------------------ | ------------------- | ------ |
| header    | 面板头内容               | string              | --     |
| disabled  | 禁用状态                 | boolean             | false  |
| className | 自定义面板内容区容器类名 | string              | --     |
| style     | 自定义面板内容区样式     | React.CSSProperties | --     |
