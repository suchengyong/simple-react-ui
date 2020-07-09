---
group:
  title: 组件
order: 20
---

# Message 全局提示

## 何时使用

需要一种不打断用户的轻量级提示方式时。

## 代码示例:

#### 基本用法

通过调用 Message 的静态方法：info()、success()、warning()、error() 并传递 options 参数来使用。具体属性设置见 Options。

```tsx
import React from 'react';
import { Button, Message } from '../../lib/simple-react.js';
import '../../lib/simple-react.css';
export default () => {
  return (
    <div>
      <Button
        onClick={() =>
          Message.info({
            content: '这是展示消息',
            duration: 200,
            top: 50,
          })
        }
      >
        Info
      </Button>
      <Button
        onClick={() =>
          Message.success({
            content: '这是展示成功消息',
            duration: 200,
            top: 50,
          })
        }
      >
        Success
      </Button>
      <Button
        onClick={() =>
          Message.warning({
            content: '这是展示警告消息',
            duration: 200,
            top: 50,
          })
        }
      >
        Warning
      </Button>
      <Button
        onClick={() =>
          Message.error({
            content: '这是展示错误消息',
            duration: 200,
            top: 50,
          })
        }
      >
        Error
      </Button>
    </div>
  );
};
```

## API

### Options

| 参数      | 说明                                          | 类型                | 默认值 |
| --------- | --------------------------------------------- | ------------------- | ------ |
| content   | 内容                                          | string              | --     |
| duration  | 自动关闭的延时，单位：秒。设为 0 时不自动关闭 | number              | 0      |
| top       | 消息距离顶部的位置                            | number              | 24     |
| showIcon  | 是否显示默认的提示 Icon 图标                  | boolean             | true   |
| onClose   | 消息完全关闭（离场动画结束）时的回调          | () => any           | --     |
| className | 自定义 Message 类名                           | string              | --     |
| style     | 自定义 Message 样式                           | React.CSSProperties | --     |
