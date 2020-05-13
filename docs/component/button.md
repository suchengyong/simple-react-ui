---
group:
  title: 组件
order: 4
---

# Button 按钮

## 代码示例:

#### 按钮类型

按钮有四种类型：默认按钮、主要按钮、虚线按钮和危险按钮。

```tsx
import React from 'react';
import { Button } from '../../lib/simple-react.js';
import '../../lib/simple-react.css';
import './style/index.css';
export default () => {
  return (
    <div>
      <Button className="magright">Default</Button>
      <Button className="magright" type="primary">
        Primary
      </Button>
      <Button className="magright" type="dashed">
        Dashed
      </Button>
      <Button className="magright" type="danger">
        Danger
      </Button>
    </div>
  );
};
```

#### Disabled 和 Loading 状态

设置按钮的禁用和加载中状态。

```tsx
import React from 'react';
import { Button } from '../../lib/simple-react.js';
import '../../lib/simple-react.css';
import './style/index.css';
export default () => {
  return (
    <div>
      <Button className="magright" disabled={true}>
        Disabled
      </Button>
      <Button className="magright" loading={true} type="primary">
        Loading
      </Button>
    </div>
  );
};
```

#### 按钮尺寸

按钮有大、中、小三种尺寸。点击以查看对应尺寸的效果

```tsx
import React from 'react';
import { Button } from '../../lib/simple-react.js';
import '../../lib/simple-react.css';
import './style/index.css';
export default () => {
  return (
    <div>
      <Button className="magright" size="Small" type="primary">
        Small
      </Button>
      <Button className="magright" size="Medium" type="primary">
        Medium
      </Button>
      <Button className="magright" size="Large" type="primary">
        Large
      </Button>
    </div>
  );
};
```

#### 按钮组合

可以容纳多个按钮的容器。

```tsx
import React from 'react';
import { Button, ButtonGroup } from '../../lib/simple-react.js';
import '../../lib/simple-react.css';
export default () => {
  return (
    <div>
      <ButtonGroup>
        <Button>Left</Button>
        <Button>Middle</Button>
        <Button>Right</Button>
      </ButtonGroup>
    </div>
  );
};
```

## API

| 参数      | 说明                     | 类型                          | 默认值    |
| --------- | ------------------------ | ----------------------------- | --------- |
| icon      | 内嵌 Icon 图标的 name 属 | string                        | --        |
| position  | 内嵌 Icon 图标的位置     | 'left','right'                | 'left'    |
| type      | 不同样式风格的按钮       | default,dashed,primary,danger | 'default' |
| size      | 按钮的尺寸               | small,medium,large            | 'medium'  |
| loading   | 加载中状态               | boolean                       | false     |
| disabled  | 禁用状态                 | boolean                       | false     |
| ghost     | 幽灵按钮                 | boolean                       | false     |
| htmlType  | 按钮的原生 type 属性     | 'button','submit','reset'     | 'button'  |
| onClick   | 点击按钮时的回调         | React.MouseEventHandler       | --        |
| className | 自定义 Button 类名       | string                        | --        |
| style     | 自定义 Button 样式       | React.CSSProperties           | --        |
