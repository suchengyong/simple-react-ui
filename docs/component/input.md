---
group:
  title: 组件
order: 6
---

# Input 输入框

## 代码示例:

#### 基本用法

最基本的用法。

```jsx
import React from 'react';
import { Input } from '../../lib/simple-react.js';
import '../../lib/simple-react.css';
import './style/index.css';
export default () => {
  return (
    <div>
      <Input placeholder="基本用法" />
    </div>
  );
};
```

#### 前置 / 后置标

用于配置一些固定组合。

```jsx
import React from 'react';
import { Input } from '../../lib/simple-react.js';
import '../../lib/simple-react.css';
import './style/index.css';
let handleChange = e => {
  console.log(e);
};
export default () => {
  return (
    <div>
      <Input
        addonBefore="Http://"
        addonAfter=".com"
        placeholder="yoursite"
        onChange={handleChange}
      />
    </div>
  );
};
```

#### 前缀 / 后缀标签

在输入框上添加前缀或后缀。

```jsx
import React from 'react';
import { Input } from '../../lib/simple-react.js';
import '../../lib/simple-react.css';
import './style/index.css';
let handleChange = e => {
  console.log(e);
};
let userIcon = 'user',
  lockIcon = 'lock';
export default () => {
  return (
    <div>
      <Input prefix={userIcon} placeholder="username" onChange={handleChange} />
      <Input suffix={lockIcon} placeholder="password" onChange={handleChange} />
    </div>
  );
};
```

#### 错误

错误状态。

```jsx
import React from 'react';
import { Input } from '../../lib/simple-react.js';
import '../../lib/simple-react.css';
import './style/index.css';
export default () => {
  return (
    <div>
      <Input error={true} placeholder="error" />
    </div>
  );
};
```

#### 搜索框

默认的搜索框。

```jsx
import React from 'react';
import { Search } from '../../lib/simple-react.js';
import '../../lib/simple-react.css';
import './style/index.css';
let handleSearch = e => {
  console.log(e);
};
export default () => {
  return (
    <div>
      <Search placeholder="default" onSearch={value => handleSearch(value)} />
    </div>
  );
};
```

#### 搜索框

带搜索按钮的搜索框

```jsx
import React from 'react';
import { Search } from '../../lib/simple-react.js';
import '../../lib/simple-react.css';
import './style/index.css';
let handleSearch = e => {
  console.log(e);
};
export default () => {
  return (
    <div>
      <Search
        enterButton={true}
        placeholder="enterButton"
        onSearch={value => handleSearch(value)}
      />
    </div>
  );
};
```

#### 文本输入框

默认的文本输入框。

```jsx
import React from 'react';
import { Textarea } from '../../lib/simple-react.js';
import '../../lib/simple-react.css';
import './style/index.css';
let handleChange = e => {
  console.log(e);
};
export default () => {
  return (
    <div>
      <Textarea placeholder="textarea" onChange={handleChange} />
    </div>
  );
};
```

#### 文本输入框自适应

自适应高度的文本输入框。

```jsx
import React from 'react';
import { Textarea } from '../../lib/simple-react.js';
import '../../lib/simple-react.css';
import './style/index.css';
let handleChange = e => {
  console.log(e);
};
export default () => {
  return (
    <div>
      <Textarea
        autosize={true}
        placeholder="autosize"
        onChange={handleChange}
      />
    </div>
  );
};
```

## API

### Input

| 参数                       | 说明                            | 类型                       | 默认值 |
| -------------------------- | ------------------------------- | -------------------------- | ------ |
| value                      | 输入框当前值                    | string                     | --     |
| defaultValue               | 输入框默认值                    | string                     | --     |
| placeholder                | 原生属性                        | string                     | --     |
| addonBefore                | 前置标签                        | string, ReactNode          | --     |
| addonAfter                 | 后置标签                        | string, ReactNode          | --     |
| prefix                     | 前缀标签                        | string, ReactNode          | --     |
| suffix                     | 后缀标签                        | string,ReactNode           | --     |
| readOnly                   | 只读状态                        | boolean                    | false  |
| disabled                   | 禁用状态                        | boolean                    | false  |
| error                      | 错误状态                        | boolean                    | false  |
| onChange                   | 值改变时的回调                  | React.ChangeEventHandler   | --     |
| onPressEnter               | 按下回车键时的回调              | React.KeyboardEventHandler | --     |
| onKeyDown 按下键盘时的回调 | React.KeyboardEventHandler      | --                         |
| onFocus                    | 聚焦时的回调                    | React.FocusEventHandler    | --     |
| onBlur                     | 失去焦点时的回调                | React.FocusEventHandler    | --     |
| className                  | 自定义输入框外层 label 容器类名 | string                     | --     |
| style                      | 自定义输入框样式                | React.CSSProperties        | --     |

### Search

| 参数         | 说明                                                                                              | 类型                            | 默认值 |
| ------------ | ------------------------------------------------------------------------------------------------- | ------------------------------- | ------ |
| value        | 输入框当前值                                                                                      | string                          | --     |
| defaultValue | 输入框默认值                                                                                      | string                          | --     |
| placeholder  | 原生属性                                                                                          | string                          | --     |
| enterButton  | 搜索后缀图标或按钮。设置为 false 时显示后缀图标，设置为 true 时显示图标按钮，其他则显示 ReactNode | boolean,string ,React.ReactNode | false  |
| onChange     | 值改变时的回调                                                                                    | React.ChangeEventHandler        | --     |
| onSearch     | 点击搜索图标 / 按钮 / 按下回车键时的回调                                                          | (value: string) => any          | --     |
| className    | 自定义输入框外层 label 容器类名                                                                   | string                          | --     |
| style        | 自定义输入框样式                                                                                  | React.CSSProperties             | --     |

### Textarea

| 参数         | 说明             | 类型   | 默认值 |
| ------------ | ---------------- | ------ | ------ |
| value        | 文本输入框当前值 | string | --     |
| defaultValue | 文本输入框默认值 | string | --     |
| placeholder  | 原生属性         | string | --     |

| autosize ｜ 自适应高度 ｜ boolean ｜ false ｜
| size | 设置文本输入框的 rows 和 cols 属性 | { rows: number , string, cols: number , string }| --|
| onChange| 值改变时的回调 |React.ChangeEventHandler| --|
|onPressEnter| 按下回车键时的回调| React.KeyboardEventHandler |--|
|className |自定义文本输入框外层 label 容器类名| string| --|
|style| 自定义文本输入框样式 |React.CSSProperties| --|

### Method

| 名称    | 描述     | 参数 |
| ------- | -------- | ---- |
| focus() | 获取焦点 | --   |
| blur()  | 移除焦点 | --   |
