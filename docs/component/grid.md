---
group:
  title: 组件
order: 5
---

# Grid 栅格

## 代码示例:

#### 基础栅格

使用 Row 和 Col 栅格组件，创建一个基本的栅格系统，所有 Col 必须放在 Row 内，Row 的直接子组件也只能是 Col。

```tsx
import React from 'react';
import { Row, Col } from '../../lib/simple-react.js';
import '../../lib/simple-react.css';
import './style/index.css';
export default () => {
  return (
    <div>
      <Row className="maginBottom">
        <Col className="colleft" span={12}>
          Col-12
        </Col>
        <Col className="collright" span={12}>
          Col-12
        </Col>
      </Row>
      <Row className="maginBottom">
        <Col className="colleft" span={8}>
          Col-8
        </Col>
        <Col className="collright" span={8}>
          Col-8
        </Col>
        <Col className="colleft" span={8}>
          Col-8
        </Col>
      </Row>
      <Row>
        <Col className="colleft" span={6}>
          Col-6
        </Col>
        <Col className="collright" span={6}>
          Col-6
        </Col>
        <Col className="colleft" span={6}>
          Col-6
        </Col>
        <Col className="collright" span={6}>
          Col-6
        </Col>
      </Row>
    </div>
  );
};
```

#### 区块偏移

使用 offset 属性使区块向右侧偏移。

```tsx
import React from 'react';
import { Row, Col } from '../../lib/simple-react.js';
import '../../lib/simple-react.css';
import './style/index.css';
export default () => {
  return (
    <div>
      <Row>
        <Col className="colleft" span={4}>
          Col-4
        </Col>
        <Col className="collright" offset={1} span={4}>
          Col-4
        </Col>
        <Col className="colleft" offset={3} span={4}>
          Col-4
        </Col>
        <Col className="collright" offset={4} span={4}>
          Col-4
        </Col>
      </Row>
    </div>
  );
};
```

## API

### Row

| 参数      | 说明               | 类型                | 默认值 |
| --------- | ------------------ | ------------------- | ------ |
| gutter    | 栅格间隔，单位：px | number              | --     |
| className | 自定义 Row 类名    | string              | --     |
| style     | 自定义 Row 样式    | React.CSSProperties | --     |

### Col

| 参数      | 说明                                              | 类型                | 默认值 |
| --------- | ------------------------------------------------- | ------------------- | ------ |
| span      | 栅格占位格数，设置为 0 时相当于设置 display: none | number              | --     |
| offset    | 栅格向右偏移的格数                                | number              | 0      |
| sm        | 响应式栅格，> 576px 生效，具体属性设置见 Options  | Options             | --     |
| md        | 响应式栅格，> 768px 生效，具体属性设置见 Options  | Options             | --     |
| lg        | 响应式栅格，> 992px 生效，具体属性设置见 Options  | Options             | --     |
| xl        | 响应式栅格，> 1200px 生效，具体属性设置见 Options | Options             | --     |
| className | 自定义 Col 类名                                   | string              | --     |
| style     | 自定义 Col 样式                                   | React.CSSProperties | --     |
