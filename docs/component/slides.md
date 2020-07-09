---
group:
  title: 组件
order: 18
---

# Slides 轮播

## 何时使用

需要展现较多内容但空间不足时。

## 代码示例:

#### 基本用法

```tsx
import React from 'react';
import { Slides } from '../../lib/simple-react.js';
import '../../lib/simple-react.css';
import './style/index.css';
export default () => {
  return (
    <div>
      <Slides>
        <div className="slides_w">1</div>
        <div className="slides_w">2</div>
        <div className="slides_w">3</div>
        <div className="slides_w">4</div>
      </Slides>
    </div>
  );
};
```

设置 duration 开始自动播放，单位：秒。

```tsx
import React from 'react';
import { Slides } from '../../lib/simple-react.js';
import '../../lib/simple-react.css';
import './style/index.css';
export default () => {
  return (
    <div>
      <Slides duration={3}>
        <div className="slides_w">1</div>
        <div className="slides_w">2</div>
        <div className="slides_w">3</div>
        <div className="slides_w">4</div>
      </Slides>
    </div>
  );
};
```

## API

| 参数         | 说明                                          | 类型                                   | 默认值 |
| ------------ | --------------------------------------------- | -------------------------------------- | ------ |
| duration     | 自动播放间隔，设置为 0 时不自动播放，单位：秒 | number                                 | 0      |
| dots         | 是否显示面板指示点                            | boolean                                | true   |
| beforeChange | 面板开始切换时的回调                          | (from: number, to: number) => any      | --     |
| afterChange  | 面板切换完成（动画结束）时的回调              | (current: number, from: number) => any | --     |
| className    | 自定义 content 类名                           | string                                 | --     |
| style        | 自定义 content 样式                           | React.CSSProperties                    | --     |

### Method

| 名称   | 描述           | 参数               |
| ------ | -------------- | ------------------ |
| goTo() | 切换到指定面板 | slideNumber:number |
| next() | 切换到下一面板 | --                 |
| prev() | 切换到上一面板 | --                 |
