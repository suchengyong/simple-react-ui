---
group:
  title: 组件
order: 23
---

# LightUp 图片预览

## 何时使用

需要在用户点击后放大展示图片时。

## 代码示例:

#### 基本用法

最基本的用法，点击图片即可放大预览。

```tsx
import React from 'react';
import { LightUp } from '../../lib/simple-react.js';
import '../../lib/simple-react.css';
export default () => {
  return (
    <div>
      <LightUp>
        <img src="https://blamedeng.github.io/xue-react/static/media/gakki.1d6a997d.png" />
      </LightUp>
    </div>
  );
};
```

## API

| 参数        | 说明                                         | 类型    | 默认值 |
| ----------- | -------------------------------------------- | ------- | ------ |
| src         | 放大展示的图片路径。默认使用原图片路径       | any     | --     |
| imgClosable | 点击图片是否关闭预览。默认只在点击蒙层时关闭 | boolean | false  |
