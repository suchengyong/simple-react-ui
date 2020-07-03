---
group:
  title: 组件
order: 10
---

# Cascader 级联选择

级联选择器。

## 何时使用

需要从一组层级信息中进行选择时，例如省市区，公司层级，事物分类等。

## 代码示例

1.最基本的用法。
省市区级联，在 options 数组的某一项设置 disabled: true 可以禁用该项。

```tsx
import React from 'react';
import { Cascader } from '../../lib/simple-react.js';
import '../../lib/simple-react.css';
export default () => {
  let options = [
    {
      value: 'zhejiang',
      label: 'Zhejiang',
      children: [
        {
          value: 'hangzhou',
          label: 'Hangzhou',
          children: [
            {
              value: 'xihu',
              label: 'West Lake',
            },
          ],
        },
      ],
    },
    {
      value: 'jiangshu',
      label: 'Jiangshu',
      children: [
        {
          value: 'nanjing',
          label: 'Nanjing',
          disabled: true,
          children: [
            {
              value: 'jiangning',
              label: 'Jiangning',
            },
          ],
        },
      ],
    },
    {
      value: 'shanghai',
      label: 'Shanghai',
      children: [
        {
          value: 'pudong',
          label: 'Pudong',
          children: [
            {
              value: 'lujiazhui',
              label: 'Lujiazhui',
            },
          ],
        },
      ],
    },
  ];
  return (
    <div>
      <Cascader
        options={options}
        placeholder="cascader"
        onChange={() => {}}
        onSelect={() => {}}
      />
    </div>
  );
};
```

2.选择即展示
这种模式下父级选项的改变将立即展示。

```tsx
import React from 'react';
import { Cascader } from '../../lib/simple-react.js';
import '../../lib/simple-react.css';
export default () => {
  let options = [
    {
      value: 'zhejiang',
      label: 'Zhejiang',
      children: [
        {
          value: 'hangzhou',
          label: 'Hangzhou',
          children: [
            {
              value: 'xihu',
              label: 'West Lake',
            },
          ],
        },
      ],
    },
    {
      value: 'jiangshu',
      label: 'Jiangshu',
      children: [
        {
          value: 'nanjing',
          label: 'Nanjing',
          disabled: true,
          children: [
            {
              value: 'jiangning',
              label: 'Jiangning',
            },
          ],
        },
      ],
    },
    {
      value: 'shanghai',
      label: 'Shanghai',
      children: [
        {
          value: 'pudong',
          label: 'Pudong',
          children: [
            {
              value: 'lujiazhui',
              label: 'Lujiazhui',
            },
          ],
        },
      ],
    },
  ];
  return (
    <div>
      <Cascader
        options={options}
        changeOnSelect={true}
        placeholder="cascader"
        onChange={() => {}}
        onSelect={() => {}}
      />
    </div>
  );
};
```

### API

#### Cascader

| 参数           | 说明                                | 类型                                                   | 默认值 |
| -------------- | ----------------------------------- | ------------------------------------------------------ | ------ |
| options        | 选项数组，选项具体属性设置见 Option | Option                                                 | --     |
| placeholder    | input 原生属性                      | string                                                 | --     |
| changeOnSelect | 每级菜单选项值发生变化是否展示      | boolean                                                | false  |
| onChange       | 选择完成时的回调                    | (valueArr: string[], selectedOptions: option[]) => any | --     |
| onSelect       | 选择完成时的回调                    | (valueArr: string[], selectedOptions: option[]) => any | --     |
| itemClassName  | 自定义子菜单项类名                  | string                                                 | --     |
| itemStyle      | 自定义子菜单项样式                  | React.CSSProperties                                    | --     |
| className      | 自定义 Cascader 类名                | string                                                 | --     |
| style          | 自定义 Cascader 样式                | React.CSSProperties                                    | --     |

#### Option

| 参数     | 说明                              | 类型    | 默认值 |
| -------- | --------------------------------- | ------- | ------ |
| value    | 选项的值                          | string  | --     |
| label    | 选项的标签，用于选择框展示        | string  | --     |
| children | 子选项数组，选项属性设置同 Option | Option  | --     |
| disabled | 禁用选项                          | boolean | false  |
