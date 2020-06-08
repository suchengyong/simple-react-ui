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
var componentName = 'DecadePanel';
var DecadePanel = /** @class */ (function(_super) {
  __extends(DecadePanel, _super);
  function DecadePanel() {
    var _this = (_super !== null && _super.apply(this, arguments)) || this;
    _this.handleClickDecade = function(decade, index) {
      var onClickDecade = _this.props.onClickDecade;
      if (onClickDecade) {
        if (index === 0) {
          onClickDecade(decade, 'first');
        } else if (index === 11) {
          onClickDecade(decade, 'last');
        } else {
          onClickDecade(decade, 'middle');
        }
      }
    };
    _this.renderDecade = function() {
      var cn = componentName;
      var _a = _this.props,
        startDecade = _a.startDecade,
        decade = _a.decade;
      return Array.from({ length: 12 }, function(item, n) {
        return startDecade + (n - 1) * 10;
      }).map(function(val, index) {
        return React.createElement(
          'li',
          {
            className: classes(cn, 'decade'),
            key: index,
            onClick: function() {
              return _this.handleClickDecade(val, index);
            },
          },
          React.createElement(
            'span',
            {
              className: classes(cn, 'decade-item', {
                selected: val === decade,
              }),
            },
            val + '-' + (val + 9),
          ),
        );
      });
    };
    return _this;
  }
  DecadePanel.prototype.render = function() {
    return React.createElement(
      'ul',
      { className: classes(componentName, '') },
      this.renderDecade(),
    );
  };
  DecadePanel.displayName = componentName;
  DecadePanel.propTypes = {
    startDecade: PropTypes.number,
    decade: PropTypes.number,
    onClickDecade: PropTypes.func,
  };
  return DecadePanel;
})(React.Component);
export default DecadePanel;
