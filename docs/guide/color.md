---
group:
  title: 文档说明
order: 3
---

## Color 色彩搭配

推荐使用以下颜色作为设计和开发规范，以保证页面和组件之间的视觉一致

### 主色

suchengyong-simple-react 使用友好的蓝色作为主色

```jsx | inline
import React from 'react';

export default () => (
  <ul
    style={{
      display: 'flex',
      flexWrap: 'wrap',
      margin: 0,
      padding: 0,
      listStyle: 'none',
    }}
  >
    <li
      style={{
        marginRight: 16,
        marginBottom: 8,
        border: '1px solid #eee',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 600,
        width: 200,
        height: 100,
        borderRadius: 2,
        background: '#40a9ff',
        paddingTop: 20,
        color: '#fff',
      }}
    >
      <div>Light</div>
      <div>#40a9ff</div>
    </li>
    <li
      style={{
        marginRight: 16,
        marginBottom: 8,
        border: '1px solid #eee',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 600,
        width: 200,
        height: 100,
        borderRadius: 2,
        background: '#1890ff',
        paddingTop: 20,
        color: '#fff',
      }}
    >
      <div>Primary</div>
      <div>#1890ff</div>
    </li>
    <li
      style={{
        marginRight: 16,
        marginBottom: 8,
        border: '1px solid #eee',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 600,
        width: 200,
        height: 100,
        borderRadius: 2,
        background: '#40a9ff',
        paddingTop: 20,
        color: '#fff',
      }}
    >
      <div>Dark</div>
      <div>#096dd9</div>
    </li>
  </ul>
);
```

### 功能色

功能色常用于信息提示，比如成功、警告和失败。

```jsx | inline
import React from 'react';

export default () => (
  <ul
    style={{
      display: 'flex',
      flexWrap: 'wrap',
      margin: 0,
      padding: 0,
      listStyle: 'none',
    }}
  >
    <li
      style={{
        marginRight: 16,
        marginBottom: 8,
        border: '1px solid #eee',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 600,
        width: 200,
        height: 100,
        borderRadius: 2,
        background: '#52c41a',
        paddingTop: 20,
        color: '#fff',
      }}
    >
      <div>Success</div>
      <div>#52c41a</div>
    </li>
    <li
      style={{
        marginRight: 16,
        marginBottom: 8,
        border: '1px solid #eee',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 600,
        width: 200,
        height: 100,
        borderRadius: 2,
        background: '#faad14',
        paddingTop: 20,
        color: '#fff',
      }}
    >
      <div>Warning</div>
      <div>#faad14</div>
    </li>
    <li
      style={{
        marginRight: 16,
        marginBottom: 8,
        border: '1px solid #eee',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 600,
        width: 200,
        height: 100,
        borderRadius: 2,
        background: '#f5222d',
        paddingTop: 20,
        color: '#fff',
      }}
    >
      <div>Error</div>
      <div>#f5222d</div>
    </li>
  </ul>
);
```

### 中性色

中性色常用于文本、背景、边框、阴影等。

```jsx | inline
import React from 'react';

export default () => (
  <ul
    style={{
      display: 'flex',
      flexWrap: 'wrap',
      margin: 0,
      padding: 0,
      listStyle: 'none',
    }}
  >
    <li
      style={{
        marginRight: 16,
        marginBottom: 8,
        border: '1px solid #eee',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 600,
        width: 200,
        height: 100,
        borderRadius: 2,
        background: 'rgba(0, 0, 0, .85)',
        paddingTop: 20,
        color: '#fff',
      }}
    >
      <div>Title</div>
      <div>rgba(0, 0, 0, .85)</div>
    </li>
    <li
      style={{
        marginRight: 16,
        marginBottom: 8,
        border: '1px solid #eee',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 600,
        width: 200,
        height: 100,
        borderRadius: 2,
        background: 'rgba(0, 0, 0, .65)',
        paddingTop: 20,
        color: '#fff',
      }}
    >
      <div>Content</div>
      <div>rgba(0, 0, 0, .65)</div>
    </li>
    <li
      style={{
        marginRight: 16,
        marginBottom: 8,
        border: '1px solid #eee',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 600,
        width: 200,
        height: 100,
        borderRadius: 2,
        background: 'rgba(0, 0, 0, .45)',
        paddingTop: 20,
        color: '#fff',
      }}
    >
      <div>Sub</div>
      <div>rgba(0, 0, 0, .45)</div>
    </li>
  </ul>
);
```
