---
group:
  title: 组件
order: 22
---

# Spin 加载中

## 何时使用

页面局部处于等待异步数据或正在渲染过程时，合适的加载动效会有效缓解用户的焦虑。

## 代码示例:

#### 基本用法

```tsx
import React from 'react';
import { Spin } from '../../lib/simple-react.js';
import '../../lib/simple-react.css';
export default () => {
  return (
    <div>
      <Spin />
    </div>
  );
};
```

自定义描述文案。

```tsx
import React from 'react';
import { Spin } from '../../lib/simple-react.js';
import '../../lib/simple-react.css';
export default () => {
  return (
    <div>
      <Spin tip="loading" />
    </div>
  );
};
```

可以直接把内容内嵌到 Spin 中，将现有容器变为加载状态。

```tsx
import React from 'react';
import { Spin, Button } from '../../lib/simple-react.js';
import '../../lib/simple-react.css';
export default () => {
  var spinning2 = true;
  return (
    <div>
      <Spin spinning={spinning2} tip="加载中..." size={30}>
        <div>Further details about the context of this element.</div>
      </Spin>
      <Button onClick={() => (spinning2 = !spinning2)} type="primary">
        Toggle
      </Button>
    </div>
  );
};
```

## API

| 参数      | 说明                     | 类型                | 默认值 |
| --------- | ------------------------ | ------------------- | ------ |
| spinning  | 是否为加载中状态         | boolean             | true   |
| size      | 加载图标的大小，单位：px | number              | 16     |
| tip       | 自定义描述文案           | string              | --     |
| className | 自定义 Spin 类名         | string              | --     |
| style     | 自定义 Spin 样式         | React.CSSProperties | --     |
