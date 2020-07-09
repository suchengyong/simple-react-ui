---
group:
  title: 组件
order: 13
---

# Radio 单选框

## 何时使用

需要在多个备选项中选择单个状态时。

## 代码示例:

#### 基本用法

最基本的用法。

```tsx
import React from 'react';
import { Radio, Option } from '../../lib/simple-react.js';
import '../../lib/simple-react.css';
export default () => {
  return (
    <div>
      <Radio defaultValue="apple" onChange={value => console.log(value)}>
        <Option value="apple">Apple</Option>
        <Option value="orange">Orange</Option>
        <Option value="pear">Pear</Option>
        <Option value="disabled" disabled={true}>
          Disabled
        </Option>
      </Radio>
    </div>
  );
};
```

设置按钮风格。

```tsx
import React from 'react';
import { Radio, Option } from '../../lib/simple-react.js';
import '../../lib/simple-react.css';
export default () => {
  return (
    <div>
      <Radio
        defaultValue="orange"
        radioStyle="button"
        onChange={value => console.log(value)}
      >
        <Option value="apple">Apple</Option>
        <Option value="orange">Orange</Option>
        <Option value="pear">Pear</Option>
        <Option value="disabled" disabled={true}>
          Disabled
        </Option>
      </Radio>
    </div>
  );
};
```

## API

### Radio

| 参数         | 说明                 | 类型                                     | 默认值    |
| ------------ | -------------------- | ---------------------------------------- | --------- |
| value        | Radio 当前选中项的值 | any                                      | --        |
| defaultValue | Radio 默认选中项的值 | any                                      | --        |
| onChange     | 选中项改变时的回调   | (value: any, e: React.MouseEvent) => any | --        |
| vertical     | 选项垂直排列         | boolean                                  | false     |
| radioStyle   | 选项风格             | "'radio'                                 | 'button'" | "radio" |
| className    | 自定义 Radio 类名    | string                                   | --        |
| style        | 自定义 Radio 样式    | React.CSSProperties                      | --        |

### Option

| 参数      | 说明                       | 类型                | 默认值 |
| --------- | -------------------------- | ------------------- | ------ |
| value     | 选项的值，用于判断是否选中 | any                 | --     |
| disabled  | 禁用状态                   | boolean             | false  |
| className | 自定义 Option 类名         | string              | --     |
| style     | 自定义 Option 样式         | React.CSSProperties | --     |
