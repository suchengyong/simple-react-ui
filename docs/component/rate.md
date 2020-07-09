---
group:
  title: 组件
order: 14
---

# Rate 评分

## 何时使用

需要用户进行快速评级或向用户展示评价时。

## 代码示例:

#### 基本用法

最基本的用法。

```tsx
import React from 'react';
import { Rate } from '../../lib/simple-react.js';
import '../../lib/simple-react.css';
export default () => {
  return (
    <div>
      <Rate defaultValue={1} />
    </div>
  );
};
```

给评分结果配以文字描述。

```tsx
import React from 'react';
import { Rate } from '../../lib/simple-react.js';
import '../../lib/simple-react.css';
export default () => {
  return (
    <div>
      <Rate
        defaultValue={3}
        onChange={value => console.log(value)}
        tips="提示"
      />
    </div>
  );
};
```

支持选中半星。

```tsx
import React from 'react';
import { Rate } from '../../lib/simple-react.js';
import '../../lib/simple-react.css';
export default () => {
  return (
    <div>
      <Rate defaultValue={2.5} allowHalf={true} />
    </div>
  );
};
```

允许再次点击清除。

```tsx
import React from 'react';
import { Rate } from '../../lib/simple-react.js';
import '../../lib/simple-react.css';
export default () => {
  return (
    <div>
      <Rate defaultValue={2} allowClear={true} />
    </div>
  );
};
```

禁用状态下评分只读，无法进行鼠标交互，典型的使用场景是用户评分完成后设置禁用防止重复评分或修改。

```tsx
import React from 'react';
import { Rate } from '../../lib/simple-react.js';
import '../../lib/simple-react.css';
export default () => {
  return (
    <div>
      <Rate defaultValue={4} disabled={true} />
    </div>
  );
};
```

### API

| 参数          | 说明                     | 类型                   | 默认值 |
| ------------- | ------------------------ | ---------------------- | ------ |
| value         | 当前值                   | number                 | --     |
| defaultValue  | 当前值                   | number                 | --     |
| onChange      | 数值变化时的回调         | (value: number) => any | --     |
| onHoverChange | 鼠标经过时数值变化的回调 | (value: number) => any | --     |
| tips          | 提示信息                 | string/React.ReactNode | --     |
| allowClear    | 是否允许再次点击后清除   | boolean                | false  |
| allowHalf     | 是否允许半选             | boolean                | false  |
| disabled      | 只读状态，无法交互       | boolean                | false  |
| className     | 自定义 Rate 容器类名     | string                 | --     |
| style         | 自定义 Rate 容器样式     | React.CSSProperties    | --     |
