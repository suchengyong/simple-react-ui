import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { uniqueId } from '../utils';
import Modal from './Modal';
var modalContainerMap = {};
function addModalContainer(modalId, container) {
  modalContainerMap[modalId] = container;
}
function ensureUniqueModal(modalId) {
  if (modalContainerMap[modalId]) {
    throw new Error('Duplicate modalId found: ' + modalId);
  }
}
export function openModal(options) {
  var modalId = uniqueId('$xue-modal$-');
  ensureUniqueModal(modalId);
  return new Promise(function(resolve, reject) {
    var title = options.title,
      content = options.content,
      okText = options.okText,
      _a = options.okType,
      okType = _a === void 0 ? 'primary' : _a,
      cancelText = options.cancelText,
      _b = options.cancelType,
      cancelType = _b === void 0 ? 'default' : _b,
      maskClosable = options.maskClosable,
      afterClose = options.afterClose,
      className = options.className,
      style = options.style;
    var container = document.createElement('div');
    document.body.append(container);
    var modalInstance = React.createElement(Modal, {
      visible: true,
      mode: 'imperative',
      title: title,
      content: content,
      okText: okText,
      okType: okType,
      cancelText: cancelText,
      cancelType: cancelType,
      maskClosable: maskClosable,
      promiseHandler: { resolve: resolve, reject: reject },
      modalId: modalId,
      afterClose: afterClose,
      className: className,
      style: style,
    });
    ReactDOM.render(modalInstance, container);
    addModalContainer(modalId, container);
  });
}
export function removeModal(modalId) {
  if (!modalContainerMap[modalId]) {
    return;
  }
  var container = modalContainerMap[modalId];
  ReactDOM.unmountComponentAtNode(container);
  container.remove();
  delete modalContainerMap[modalId];
}
