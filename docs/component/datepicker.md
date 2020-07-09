---
group:
  title: 组件
order: 12
---

# DatePicker 日期选择

## 何时使用

需要用户输入一个日期时。

## 代码示例:

#### 基本用法

最基本的用法。

```tsx
import React from 'react';
import { DatePicker } from '../../lib/simple-react.js';
import '../../lib/simple-react.css';
export default () => {
  return (
    <div>
      <DatePicker placeholder="datepicker" />
    </div>
  );
};
```

## API

| 参数               | 说明                           | 类型                                                                                      | 默认值 |
| ------------------ | ------------------------------ | ----------------------------------------------------------------------------------------- | ------ |
| value              | 选前选中日期                   | 'string 可被 Date.parse() 解析'                                                           | --     |
| defaultValue       | 默认选中日期                   | 'string 可被 Date.parse() 解析'                                                           | --     |
| defaultPickerValue | calendar 面板默认展示日期      | 'string 可被 Date.parse() 解析'                                                           | today  |
| placeholder        | 输入框提示文字                 | string                                                                                    | --     |
| footer             | 日期选择面板的自定义页脚       | string                                                                                    | --     |
| onOpenChange       | 选中日期改变时的回调           | (value: string, valueObject: { year: number, month: number, date: number } / null) => any | --     |
| onChange           | calendar 面板弹出/关闭时的回调 | (visible: boolean) => any                                                                 | --     |
| zIndex             | calendar 面板的 z-index 值     | number                                                                                    | 80     |
| className          | 自定义输入框类名               | string                                                                                    | --     |
| style              | 自定义输入框样式               | React.CSSProperties                                                                       | --     |
