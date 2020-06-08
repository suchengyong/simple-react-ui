import React from 'react';
import { Button } from './simple-react';
function Demo() {
  return React.createElement(
    'div',
    { className: 'App' },
    'react \u7EC4\u4EF6\u5E93 \u6D4B\u8BD5',
    React.createElement(
      Button,
      { className: 'magright', type: 'primary' },
      'Primary',
    ),
  );
}
export default Demo;
