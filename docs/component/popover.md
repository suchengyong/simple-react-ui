---
group:
  title: 组件
order: 17
---

# Popover 气泡卡片

## 何时使用

根据用户的操作行为展现目标元素的进一步提示或相关操作时。

## 代码示例:

#### 基本用法

最基本的用法，浮层大小由内容区决定。

```tsx
import React from 'react';
import { Popover, Button } from '../../lib/simple-react.js';
import '../../lib/simple-react.css';
export default () => {
  var content = '浮层内容显示区';
  return (
    <div>
      <Popover content={content}>
        <Button type="primary">Hover me</Button>
      </Popover>
    </div>
  );
};
```

最基本的用法，浮层大小由内容区决定。

```tsx
import React from 'react';
import { Popover, Button } from '../../lib/simple-react.js';
import '../../lib/simple-react.css';
export default () => {
  var content = '浮层内容显示区';
  return (
    <div>
      <Popover content={content} position="left">
        <Button type="primary">Left</Button>
      </Popover>
      <Popover content={content}>
        <Button type="primary">Top</Button>
      </Popover>
      <Popover content={content} position="bottom">
        <Button type="primary">Bottom</Button>
      </Popover>
      <Popover content={content} position="right">
        <Button type="primary">Right</Button>
      </Popover>
    </div>
  );
};
```

最基本的用法，浮层大小由内容区决定。

```tsx
import React from 'react';
import { Popover, Button } from '../../lib/simple-react.js';
import '../../lib/simple-react.css';
export default () => {
  var content = '浮层内容显示区';
  return (
    <div>
      <Popover content={content}>
        <Button type="primary">Hover</Button>
      </Popover>
      <Popover content={content} trigger="click">
        <Button type="primary">Click</Button>
      </Popover>
      <Popover content={content} trigger="focus">
        <Button type="primary">Focus</Button>
      </Popover>
    </div>
  );
};
```

## API

| 参数            | 说明                                | 类型                          | 默认值 |
| --------------- | ----------------------------------- | ----------------------------- | ------ |
| visible         | 手动控制浮层显隐                    | boolean                       | --     |
| defaultVisible  | 浮层默认贤隐                        | boolean                       | false  |
| content         | 浮层内容                            | string                        | --     |
| trigger         | 触发方式                            | 'hover'/'click'/'focus'       | hover  |
| position        | 浮层的相对位置                      | 'top'/'left'/'right'/'bottom' | top    |
| clickPopClose   | 触发方式为 click 时点击浮层是否关闭 | boolean                       | false  |
| onVisibleChange | 浮层显隐状态改变时的回调            | (visible: boolean) => any     | --     |
| className       | 自定义 content 类名                 | string                        | --     |
| style           | 自定义 content 样式                 | React.CSSProperties           | --     |
