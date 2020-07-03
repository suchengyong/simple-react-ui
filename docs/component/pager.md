---
group:
  title: 组件
order: 9
---

# Pager 分页

分隔长列表，展示单个页面。

## 何时使用

加载/渲染所有数据开销较大时，每次只加载/渲染单个页面。

## 代码示例

1.最基本的用法。

```tsx
import React from 'react';
import { Pager } from '../../lib/simple-react.js';
import '../../lib/simple-react.css';
export default () => {
  return (
    <div>
      <Pager total={5} onChange={current => console.log(current)} />
    </div>
  );
};
```

2.页码更多时显示效果。

```tsx
import React from 'react';
import { Pager } from '../../lib/simple-react.js';
import '../../lib/simple-react.css';
export default () => {
  return (
    <div>
      <Pager total={400} onChange={current => console.log(current)} />
    </div>
  );
};
```

3.迷你版本.

```tsx
import React from 'react';
import { Pager } from '../../lib/simple-react.js';
import '../../lib/simple-react.css';
export default () => {
  return (
    <div>
      <Pager
        total={20}
        size="small"
        onChange={current => console.log(current)}
      />
    </div>
  );
};
```

4.简洁版本。

```tsx
import React from 'react';
import { Pager } from '../../lib/simple-react.js';
import '../../lib/simple-react.css';
export default () => {
  return (
    <div>
      <Pager
        total={20}
        simple={true}
        onChange={current => console.log(current)}
      />
    </div>
  );
};
```

5.页码由 current 控制。

```tsx
import React from 'react';
import { Pager } from '../../lib/simple-react.js';
import '../../lib/simple-react.css';
export default () => {
  return (
    <div>
      <Pager
        total={20}
        current={5}
        onChange={current => console.log(current)}
      />
    </div>
  );
};
```

### API

| 参数             | 说明               | 类型                     | 默认值     |
| ---------------- | ------------------ | ------------------------ | ---------- |
| current          | 当前页码           | number                   | --         |
| defaultCurrent   | 默认的当前页码     | number                   | 1          |
| total            | 总页数             | number                   | --         |
| size             | 尺寸               | "'small'                 | 'default'" | 'default' |
| simple           | 简洁版本           | Boolean                  | false      |
| hideOnSinglePage | 只有一页时是否隐藏 | Boolean                  | false      |
| onChange         | 页码改变时的回调   | (current: number) => any | --         |
| className        | 自定义 Pager 类名  | string                   | --         |
| style            | 自定义 Pager 样式  | React.CSSProperties      | --         |
