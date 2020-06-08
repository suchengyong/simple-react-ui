import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { uniqueId } from '../utils';
import Message from './Message';
var messageContainerMap = {};
function addMessageContainer(messageId, container) {
  messageContainerMap[messageId] = container;
}
function ensureUniqueMessage(messageId) {
  if (messageContainerMap[messageId]) {
    throw new Error('Dunplicate messageId found: ' + messageId);
  }
}
function openMessage(options, mode) {
  var messageId = uniqueId('$xue-message$-');
  ensureUniqueMessage(messageId);
  var content = options.content,
    _a = options.duration,
    duration = _a === void 0 ? 3 : _a,
    _b = options.top,
    top = _b === void 0 ? 24 : _b,
    _c = options.showIcon,
    showIcon = _c === void 0 ? true : _c,
    onClose = options.onClose,
    className = options.className,
    style = options.style;
  var container = document.createElement('div');
  document.body.append(container);
  var messageInstance = React.createElement(Message, {
    content: content,
    mode: mode,
    duration: duration,
    top: top,
    showIcon: showIcon,
    messageId: messageId,
    onClose: onClose,
    className: className,
    style: style,
  });
  ReactDOM.render(messageInstance, container);
  addMessageContainer(messageId, container);
}
export function removeMessage(messageId) {
  if (!messageContainerMap[messageId]) {
    return;
  }
  var container = messageContainerMap[messageId];
  ReactDOM.unmountComponentAtNode(container);
  container.remove();
  delete messageContainerMap[messageId];
}
export function info(options) {
  openMessage(options, 'info');
}
export function success(options) {
  openMessage(options, 'success');
}
export function warning(options) {
  openMessage(options, 'warning');
}
export function error(options) {
  openMessage(options, 'error');
}
