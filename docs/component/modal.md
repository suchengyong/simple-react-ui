---
group:
  title: 组件
order: 21
---

# Modal 对话框

## 何时使用

需要与用户交互，同时避免中断用户的操作流程时。

## 代码示例:

#### 基本用法

使用组件声明一个对话框，通过控制 visible 属性来显示/隐藏。

```tsx
import React from 'react';
import { Modal, Button } from '../../lib/simple-react.js';
import '../../lib/simple-react.css';
export default () => {
  var visible = false;
  return (
    <div>
      <Modal
        visible={visible}
        title="Declarative"
        onConfirm={() => {
          visible = false;
        }}
        onCancel={() => {
          visible = false;
        }}
      >
        <div>内容展示区内容展示区内容展示区内容展示区...</div>
        <div>内容展示区内容展示区内容展示区内容展示区...</div>
        <div>内容展示区内容展示区内容展示区内容展示区...</div>
      </Modal>
      <Button type="primary" onClick={() => (visible = true)}>
        Open Modal
      </Button>
    </div>
  );
};
```

调用 openModal 函数弹出一个对话框，openModal 函数将返回一个 promise 对象，其状态由用户操作决定。openModal 函数接受一个 options 参数，支持组件大部分属性，具体属性设置见 Options。

```tsx
import React from 'react';
import { Modal, Button } from '../../lib/simple-react.js';
import '../../lib/simple-react.css';
export default () => {
  function handleOpenModal() {
    Modal.openModal({
      title: '标题',
      content: '内容展示区内容展示区内容展示区内容展示区',
    })
      .then(() => {
        console.log('resolve');
      })
      .catch(() => {
        console.log('reject');
      });
  }
  return (
    <div>
      <Button type="primary" onClick={handleOpenModal()}>
        Open Modal
      </Button>
    </div>
  );
};
```

## API

| 参数       | 说明                                   | 类型                         | 默认值 |
| ---------- | -------------------------------------- | ---------------------------- | ------ |
| visible    | 对话框是否可见                         | boolean                      | false  |
| title      | 标题                                   | string/ReactNode             | --     |
| footer     | 底部内容                               | string/ReactNode             | --     |
| onConfirm  | 点击确认按钮时的回调                   | (e: React.MouseEvent) => any | true   |
| onCancel   | 点击取消按钮时的回调                   | (e: React.MouseEvent) => any | --     |
| onMask     | 点击蒙层时的回调                       | (e: React.MouseEvent) => any | --     |
| afterClose | 对话框完全关闭（离场动画结束）时的回调 | (e: React.MouseEvent) => any | --     |
| className  | 自定义 Modal 类名                      | string                       | --     |
| style      | 自定义 Modal 样式                      | React.CSSProperties          | --     |

### Options

| 参数         | 说明                                         | 类型                                  | 默认值  |
| ------------ | -------------------------------------------- | ------------------------------------- | ------- |
| title        | 标题                                         | string/ReactNode                      | --      |
| content      | 内容                                         | string/ReactNode                      | --      |
| okText       | 确认按钮文字                                 | string                                | 确定    |
| okType       | 确认按钮类型                                 | 'default'/'dashed'/'primary'/'danger' | primary |
| cancelText   | 取消按钮文字                                 | string                                | 取消    |
| cancelType   | 取消按钮类型                                 | 'default'/'dashed'/'primary'/'danger' | default |
| maskClosable | 点击蒙层是否关闭 Modal（相当于点击取消按钮） | boolean                               | false   |
| afterClose   | 对话框完全关闭（离场动画结束）时的回调       | () => any                             | --      |
| className    | 自定义 Modal 类名                            | string                                | --      |
| style        | 自定义 Modal 样式                            | React.CSSProperties                   | --      |
