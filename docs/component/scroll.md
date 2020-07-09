---
group:
  title: 组件
order: 24
---

# Scroll 滚动条

## 何时使用

当需要使用自定义滚动条代替浏览器自带滚动条时。

## 代码示例:

#### 基本用法

```tsx
import React from 'react';
import { Scroll } from '../../lib/simple-react.js';
import '../../lib/simple-react.css';
export default () => {
  return (
    <div>
      <Scroll>
        <div>滚动内容</div>
        <div>滚动内容</div>
        <div>滚动内容</div>
        <div>滚动内容</div>
        <div>滚动内容</div>
        <div>滚动内容</div>
        <div>滚动内容</div>
        <div>滚动内容</div>
        <div>滚动内容</div>
        <div>滚动内容</div>
        <div>滚动内容</div>
        <div>滚动内容</div>
        <div>滚动内容</div>
        <div>滚动内容</div>
        <div>滚动内容</div>
        <div>滚动内容</div>
        <div>滚动内容</div>
        <div>滚动内容</div>
        <div>滚动内容</div>
        <div>滚动内容</div>
        <div>滚动内容</div>
        <div>滚动内容</div>
        <div>滚动内容</div>
        <div>滚动内容</div>
        <div>滚动内容</div>
        <div>滚动内容</div>
        <div>滚动内容</div>
        <div>滚动内容</div>
        <div>滚动内容</div>
        <div>滚动内容</div>
        <div>滚动内容</div>
        <div>滚动内容</div>
        <div>滚动内容</div>
        <div>滚动内容</div>
        <div>滚动内容</div>
        <div>滚动内容</div>
        <div>滚动内容</div>
        <div>滚动内容</div>
        <div>滚动内容</div>
        <div>滚动内容</div>
        <div>滚动内容</div>
        <div>滚动内容</div>
        <div>滚动内容</div>
        <div>滚动内容</div>
        <div>滚动内容</div>
        <div>滚动内容</div>
        <div>滚动内容</div>
        <div>滚动内容</div>
        <div>滚动内容</div>
        <div>滚动内容</div>
        <div>滚动内容</div>
        <div>滚动内容</div>
        <div>滚动内容</div>
        <div>滚动内容</div>
        <div>滚动内容</div>
        <div>滚动内容</div>
        <div>滚动内容</div>
        <div>滚动内容</div>
        <div>滚动内容</div>
        <div>滚动内容</div>
      </Scroll>
    </div>
  );
};
```

## API

| 参数                | 说明                         | 类型                | 默认值 |
| ------------------- | ---------------------------- | ------------------- | ------ |
| scrollBarVisible    | 是否始终展示滚动条           | boolean             | false  |
| trackClassName      | 自定义滚动条滑块轨道容器类名 | string              | --     |
| trackStyle          | 自定义滚动条滑块轨道容器样式 | React.CSSProperties | --     |
| scroollBarClassName | 自定义滚动条滑块类名         | string              | --     |
| scrollBarStyle      | 自定义滚动条滑块样式         | React.CSSProperties | --     |
| className           | 自定义外层容器类名           | string              | --     |
| style               | 自定义外层容器样式           | React.CSSProperties | --     |
