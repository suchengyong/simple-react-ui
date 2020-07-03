---
group:
  title: 组件
order: 7
---

# Affix 滚动自顶部固定

将页面元素固定在可视范围。

## 何时使用

当内容区域出现滚动，需要部分内容始终在可视范围内展示时。

## 代码示例

```tsx
import React from 'react';
import { Affix } from '../../lib/simple-react.js';
import '../../lib/simple-react.css';
export default () => {
  return (
    <div>
      <Affix distance={20}>
        <div>Affix</div>
      </Affix>
    </div>
  );
};
```

## API

| 参数      | 说明                             | 类型                | 默认值 |
| --------- | -------------------------------- | ------------------- | ------ |
| distance  | 距离窗口顶部达到指定偏移量后触发 | Number              | 0      |
| className | 自定义固钉容器类名               | string              | --     |
| style     | 自定义固钉容器样式               | React.CSSProperties | --     |
