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
import * as PropTypes from 'prop-types';
import { classes } from '../utils';
import { info, success, warning, error, removeMessage } from './openMessage';
import Transition from '../transition/Transition';
import Icon from '../icon/Icon';
var componentName = 'Message';
var Message = /** @class */ (function(_super) {
  __extends(Message, _super);
  function Message() {
    var _this = (_super !== null && _super.apply(this, arguments)) || this;
    _this.state = {
      visible: false,
    };
    _this.close = function() {
      _this.setState({
        visible: false,
      });
      _this.leaveTimeout = setTimeout(function() {
        _this.afterLeave();
      }, 300);
    };
    _this.afterLeave = function() {
      var _a = _this.props,
        messageId = _a.messageId,
        onClose = _a.onClose;
      Message.removeMessage(messageId);
      if (onClose) {
        onClose();
      }
    };
    return _this;
  }
  Message.prototype.componentDidMount = function() {
    var _this = this;
    var duration = this.props.duration;
    this.setState({
      visible: true,
    });
    if (duration) {
      this.closeTimeout = setTimeout(function() {
        _this.close();
      }, duration * 1000);
    }
  };
  Message.prototype.componentWillUnmount = function() {
    var _a = this,
      closeTimeout = _a.closeTimeout,
      leaveTimeout = _a.leaveTimeout;
    if (closeTimeout) {
      window.clearTimeout(closeTimeout);
    }
    if (leaveTimeout) {
      window.clearTimeout(leaveTimeout);
    }
  };
  Message.prototype.render = function() {
    var cn = componentName;
    var _a = this.props,
      mode = _a.mode,
      top = _a.top,
      content = _a.content,
      showIcon = _a.showIcon,
      duration = _a.duration,
      className = _a.className,
      style = _a.style;
    var visible = this.state.visible;
    return React.createElement(
      Transition,
      {
        visible: visible,
        beforeEnter: {
          transform: 'translateX(-50%) translateY(' + -top + 'px)',
          opacity: 0,
        },
        afterEnter: {
          transform: 'translateX(-50%) translateY(0)',
          opacity: 1,
        },
      },
      React.createElement(
        'div',
        {
          className: classes(cn, '', [className], { 'with-icon': showIcon }),
          style: Object.assign({}, { top: top + 'px' }, style),
        },
        React.createElement(
          'span',
          { className: classes(cn, 'icon-wrapper', [mode]) },
          React.createElement(Icon, { name: mode, size: 16 }),
        ),
        content,
        duration === 0 &&
          React.createElement(
            'span',
            { className: classes(cn, 'close'), onClick: this.close },
            React.createElement(Icon, { name: 'close', size: 12 }),
          ),
      ),
    );
  };
  Message.displayName = componentName;
  Message.info = info;
  Message.success = success;
  Message.warning = warning;
  Message.error = error;
  Message.removeMessage = removeMessage;
  Message.propTypes = {
    content: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    mode: PropTypes.oneOf(['info', 'success', 'warning', 'error']).isRequired,
    top: PropTypes.number.isRequired,
    duration: PropTypes.number,
    showIcon: PropTypes.bool,
    messageId: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object,
  };
  return Message;
})(React.Component);
export default Message;
