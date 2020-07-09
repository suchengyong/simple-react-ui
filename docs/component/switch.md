---
group:
  title: 组件
order: 15
---

# Switch 开关

## 何时使用

需要在两种状态之间切换时。

## 代码示例:

#### 基本用法

最基本的用法。

```tsx
import React from 'react';
import { Switch } from '../../lib/simple-react.js';
import '../../lib/simple-react.css';
export default () => {
  return (
    <div>
      <Switch onChange={vale => console.log(vale)} />
    </div>
  );
};
```

不同尺寸大小。

```tsx
import React from 'react';
import { Switch } from '../../lib/simple-react.js';
import '../../lib/simple-react.css';
export default () => {
  return (
    <div>
      <Switch onChange={vale => console.log(vale)} />
      <Switch onChange={vale => console.log(vale)} size="small" />
    </div>
  );
};
```

设置 disabled 以禁用。

```tsx
import React from 'react';
import { Switch } from '../../lib/simple-react.js';
import '../../lib/simple-react.css';
export default () => {
  return (
    <div>
      <Switch onChange={vale => console.log(vale)} />
      <Switch disabled={true} />
    </div>
  );
};
```

设置默认选中状态。

```tsx
import React from 'react';
import { Switch } from '../../lib/simple-react.js';
import '../../lib/simple-react.css';
export default () => {
  return (
    <div>
      <Switch onChange={vale => console.log(vale)} />
      <Switch defaultChecked={true} />
    </div>
  );
};
```

### API

| 参数           | 说明                 | 类型                                           | 默认值     |
| -------------- | -------------------- | ---------------------------------------------- | ---------- |
| checked        | 当前选中状态         | boolean                                        | --         |
| defaultChecked | 默认选中状态         | boolean                                        | false      |
| size           | 尺寸大小             | "'small'                                       | 'default'" | default |
| disabled       | 禁用状态             | boolean                                        | false      |
| onChange       | 选中状态改变时的回调 | (checked: boolean, e: React.MouseEvent) => any | --         |
| className      | 自定义外层容器类名   | string                                         | --         |
| style          | 自定义外层容器样式   | React.CSSProperties                            | --         |
