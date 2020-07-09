---
group:
  title: 组件
order: 11
---

# CheckBox 选择框

## 何时使用

在一组可选项中进行单项/多项选择时。

## 代码示例:

#### 基本用法

最基本的用法。

```tsx
import React from 'react';
import { CheckBox } from '../../lib/simple-react.js';
import '../../lib/simple-react.css';
export default () => {
  return (
    <div>
      <CheckBox>CheckBox</CheckBox>
    </div>
  );
};
```

禁用和半选（只负责样式控制）状态。

```tsx
import React from 'react';
import { CheckBox } from '../../lib/simple-react.js';
import '../../lib/simple-react.css';
export default () => {
  return (
    <div>
      <CheckBox disabled={true}>Disabled</CheckBox>
      <CheckBox defaultChecked={true} disabled={true}>
        Disabled
      </CheckBox>
      <CheckBox indeterminate={true}>Indeterminate</CheckBox>
    </div>
  );
};
```

方便的从数组生成 Checkbox 组，并提供全选功能。

```tsx
import React from 'react';
import { CheckBoxGroup } from '../../lib/simple-react.js';
import '../../lib/simple-react.css';
export default () => {
  var options = [
    {
      value: '1',
      label: '篮球',
    },
    {
      value: '2',
      label: '羽毛球',
    },
    {
      value: '3',
      label: '乒乓球',
    },
    {
      value: '4',
      label: '足球',
    },
  ];
  return (
    <div>
      <CheckBoxGroup options={options} title="爱好" />
    </div>
  );
};
```

## API

#### CheckBox

| 参数           | 说明                 | 类型                                           | 默认值 |
| -------------- | -------------------- | ---------------------------------------------- | ------ |
| checked        | 选中状态             | boolean                                        | false  |
| defaultChecked | 默认选中状态         | boolean                                        | false  |
| disabled       | 禁用状态             | boolean                                        | false  |
| indeterminate  | 半选状态             | boolean                                        | false  |
| onChange       | 选中状态改变时的回调 | (checked: boolean, e: React.MouseEvent) => any | ------ |

#### CheckBoxGroup

| 参数         | 说明                          | 类型                                           | 默认值          |
| ------------ | ----------------------------- | ---------------------------------------------- | --------------- |
| options      | CheckBox 数据源               | Option[]                                       | --              |
| defaultValue | 默认选中项 value 数组         | string[]                                       | --              |
| value        | 选中项 value 数组             | string[]                                       | --              |
| title        | 全选 CheckBox 的渲染内容      | string                                         | React.ReactNode | -- |
| onChange     | 选中状态改变时的回调          | (checked: boolean, e: React.MouseEvent) => any | ------          |
| className    | 自定义 CheckBoxGroup 容器类名 | string                                         | --              |
| style        | 自定义 CheckBoxGroup 容器样式 | React.CSSProperties                            | --              |

#### Option

| 参数     | 说明                                 | 类型    | 默认值 |
| -------- | ------------------------------------ | ------- | ------ |
| value    | CheckBox 唯一标志                    | string  | --     |
| label    | CheckBox 的渲染内容                  | string  | --     |
| disabled | 对应 CheckBox 的 disabled 属性，可选 | boolean | --     |
