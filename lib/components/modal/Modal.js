var __extends =
  (this && this.__extends) ||
  (function() {
    var extendStatics = function(d, b) {
      extendStatics =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function(d, b) {
            d.__proto__ = b;
          }) ||
        function(d, b) {
          for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
      return extendStatics(d, b);
    };
    return function(d, b) {
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype =
        b === null
          ? Object.create(b)
          : ((__.prototype = b.prototype), new __());
    };
  })();
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as PropTypes from 'prop-types';
import { classes } from '../utils';
import { openModal, removeModal } from './openModal';
import Transition from '../transition/Transition';
import Button from '../button/Button';
var componentName = 'Modal';
var Modal = /** @class */ (function(_super) {
  __extends(Modal, _super);
  function Modal(props) {
    var _this = _super.call(this, props) || this;
    // 获取滚动条宽度
    _this.getScrollBarWidth = function() {
      return (
        window.innerWidth - document.body.clientWidth ||
        document.documentElement.clientHeight
      );
    };
    // 'imperative' 模式下关闭 modal
    _this.closeModal = function() {
      _this.setState(
        {
          modalVisible: false,
        },
        function() {
          _this.timeout = setTimeout(function() {
            _this.afterLeave();
          }, 300);
        },
      );
    };
    _this.handleOnConfirm = function(e) {
      var _a = _this.props,
        onConfirm = _a.onConfirm,
        mode = _a.mode,
        promiseHandler = _a.promiseHandler;
      if (mode === 'declarative') {
        _this.timeout = setTimeout(function() {
          _this.afterLeave();
        }, 300);
        if (onConfirm) {
          onConfirm(e);
        }
      }
      if (mode === 'imperative' && promiseHandler) {
        _this.closeModal();
        promiseHandler.resolve();
      }
    };
    _this.handleOnCancel = function(e) {
      var _a = _this.props,
        onCancel = _a.onCancel,
        mode = _a.mode,
        promiseHandler = _a.promiseHandler;
      if (mode === 'declarative') {
        _this.timeout = setTimeout(function() {
          _this.afterLeave();
        }, 300);
        if (onCancel) {
          onCancel(e);
        }
      }
      if (mode === 'imperative' && promiseHandler) {
        _this.closeModal();
        promiseHandler.reject();
      }
    };
    _this.handleOnMask = function(e) {
      var _a = _this.props,
        onMask = _a.onMask,
        mode = _a.mode,
        promiseHandler = _a.promiseHandler,
        maskClosable = _a.maskClosable;
      if (onMask) {
        onMask(e);
      }
      if (mode === 'imperative' && maskClosable && promiseHandler) {
        _this.closeModal();
        promiseHandler.reject();
      }
    };
    _this.afterLeave = function() {
      // 关闭后还原
      document.body.style.overflow = _this.bodyOverflow;
      document.body.style.paddingRight = _this.bodyPaddingRight;
      var _a = _this.props,
        modalId = _a.modalId,
        afterClose = _a.afterClose;
      if (afterClose) {
        afterClose();
      }
      if (modalId) {
        Modal.removeModal(modalId);
      }
    };
    _this.state = {
      modalVisible: props.mode === 'declarative',
    };
    return _this;
  }
  Modal.prototype.componentDidMount = function() {
    var visible = this.props.visible;
    var modalVisible = this.state.modalVisible;
    if (visible && modalVisible) {
      this.bodyPaddingRight = document.body.style.paddingRight;
    }
    if (!modalVisible) {
      this.setState({
        modalVisible: true,
      });
    }
  };
  Modal.prototype.componentDidUpdate = function(prevProps, prevState) {
    var _a = this.props,
      mode = _a.mode,
      visible = _a.visible;
    var modalVisible = this.state.modalVisible;
    // 声明式调用
    if (mode === 'declarative') {
      // false => true 打开
      if (!prevProps.visible && visible) {
        this.bodyOverflow = document.body.style.overflow;
        this.bodyPaddingRight = document.body.style.paddingRight;
        document.body.style.paddingRight = this.getScrollBarWidth() + 'px';
        document.body.style.overflow = 'hidden';
        // true => false 关闭
      }
      // 命令式调用
    } else if (mode === 'imperative') {
      if (!prevState.modalVisible && modalVisible) {
        this.bodyOverflow = document.body.style.overflow;
        this.bodyPaddingRight = document.body.style.paddingRight;
        document.body.style.paddingRight = this.getScrollBarWidth() + 'px';
        document.body.style.overflow = 'hidden';
      }
    }
  };
  Modal.prototype.componentWillUnmount = function() {
    if (this.timeout) {
      window.clearTimeout(this.timeout);
    }
  };
  Modal.prototype.render = function() {
    var cn = componentName;
    var _a = this.props,
      title = _a.title,
      footer = _a.footer,
      visible = _a.visible,
      mode = _a.mode,
      content = _a.content,
      okText = _a.okText,
      okType = _a.okType,
      cancelText = _a.cancelText,
      cancelType = _a.cancelType,
      className = _a.className,
      style = _a.style,
      children = _a.children;
    var modalVisible = this.state.modalVisible;
    return ReactDOM.createPortal(
      React.createElement(
        React.Fragment,
        null,
        React.createElement(
          Transition,
          {
            visible: visible && modalVisible,
            beforeEnter: { opacity: 0 },
            afterEnter: { opacity: 0.7 },
          },
          React.createElement('div', {
            className: classes(cn, 'mask'),
            onClick: this.handleOnMask,
          }),
        ),
        React.createElement(
          Transition,
          {
            visible: visible && modalVisible,
            beforeEnter: {
              opacity: 0,
              transform: 'translateX(-50%) translateY(-50%) scale(0)',
              top: '50%',
            },
            afterEnter: {
              opacity: 1,
              transform: 'translateX(-50%) translateY(-50%) scale(1)',
              top: '30%',
            },
          },
          React.createElement(
            'div',
            { className: classes(cn, 'content', [className]), style: style },
            React.createElement(
              'div',
              { className: classes(cn, 'header') },
              title || 'Modal',
            ),
            React.createElement(
              'div',
              { className: classes(cn, 'body') },
              mode === 'declarative' ? children : content,
            ),
            React.createElement(
              'div',
              { className: classes(cn, 'footer') },
              footer ||
                React.createElement(
                  React.Fragment,
                  null,
                  React.createElement(
                    Button,
                    {
                      style: { marginRight: '8px' },
                      onClick: this.handleOnCancel,
                      type: cancelType,
                    },
                    cancelText,
                  ),
                  React.createElement(
                    Button,
                    { type: okType, onClick: this.handleOnConfirm },
                    okText,
                  ),
                ),
            ),
          ),
        ),
      ),
      document.body,
    );
  };
  Modal.displayName = componentName;
  Modal.openModal = openModal;
  Modal.removeModal = removeModal;
  Modal.defaultProps = {
    mode: 'declarative',
    maskClosable: false,
    okText: '确 定',
    okType: 'primary',
    cancelText: '取 消',
    cancelType: 'default',
  };
  Modal.propTypes = {
    visible: PropTypes.bool.isRequired,
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    footer: PropTypes.element,
    mode: PropTypes.oneOf(['declarative', 'imperative']),
    onConfirm: PropTypes.func,
    onCancel: PropTypes.func,
    onMask: PropTypes.func,
    maskClosable: PropTypes.bool,
    promiseHandler: PropTypes.object,
    modalId: PropTypes.string,
    afterClose: PropTypes.func,
    okText: PropTypes.string,
    okType: PropTypes.oneOf(['default', 'dashed', 'primary', 'danger']),
    cancelText: PropTypes.string,
    cancelType: PropTypes.oneOf(['default', 'dashed', 'primary', 'danger']),
    content: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    className: PropTypes.string,
    style: PropTypes.object,
  };
  return Modal;
})(React.Component);
export default Modal;
