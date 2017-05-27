'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _class, _temp2, _initialiseProps;

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import abc from 'abc'

var Counter = (_temp2 = _class = function (_wepy$component) {
  _inherits(Counter, _wepy$component);

  function Counter() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Counter);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Counter.__proto__ || Object.getPrototypeOf(Counter)).call.apply(_ref, [this].concat(args))), _this), _initialiseProps.call(_this), _temp), _possibleConstructorReturn(_this, _ret);
  }

  return Counter;
}(_wepy2.default.component), _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.props = {
    num: {
      type: [Number, String],
      coerce: function coerce(v) {
        return +v;
      },
      default: 50
    }
  };
  this.data = {};
  this.events = {
    'index-broadcast': function indexBroadcast() {
      var _ref2;

      var $event = (_ref2 = arguments.length - 1, arguments.length <= _ref2 ? undefined : arguments[_ref2]);
      console.log(_this2.$name + ' receive ' + $event.name + ' from ' + $event.source.$name);
    }
  };
  this.methods = {
    plus: function plus() {
      this.num = this.num + 1;
      console.log(this.$name + ' plus tap');

      this.$emit('index-emit', 1, 2, 3);
    },
    minus: function minus() {
      this.num = this.num - 1;
      console.log(this.$name + ' minus tap');
    }
  };
}, _temp2);
exports.default = Counter;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvdW50ZXIuanMiXSwibmFtZXMiOlsiQ291bnRlciIsImNvbXBvbmVudCIsInByb3BzIiwibnVtIiwidHlwZSIsIk51bWJlciIsIlN0cmluZyIsImNvZXJjZSIsInYiLCJkZWZhdWx0IiwiZGF0YSIsImV2ZW50cyIsIiRldmVudCIsImxlbmd0aCIsImNvbnNvbGUiLCJsb2ciLCIkbmFtZSIsIm5hbWUiLCJzb3VyY2UiLCJtZXRob2RzIiwicGx1cyIsIiRlbWl0IiwibWludXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7Ozs7Ozs7Ozs7QUFDQTs7SUFFcUJBLE87Ozs7Ozs7Ozs7Ozs7Ozs7OztFQUFnQixlQUFLQyxTOzs7T0FDeENDLEssR0FBUTtBQUNOQyxTQUFLO0FBQ0hDLFlBQU0sQ0FBQ0MsTUFBRCxFQUFTQyxNQUFULENBREg7QUFFSEMsY0FBUSxnQkFBVUMsQ0FBVixFQUFhO0FBQ25CLGVBQU8sQ0FBQ0EsQ0FBUjtBQUNELE9BSkU7QUFLSEMsZUFBUztBQUxOO0FBREMsRztPQVVSQyxJLEdBQU8sRTtPQUVQQyxNLEdBQVM7QUFDUCx1QkFBbUIsMEJBQWE7QUFBQTs7QUFDOUIsVUFBSUMsa0JBQWMsVUFBS0MsTUFBTCxHQUFjLENBQTVCLDJEQUFKO0FBQ0FDLGNBQVFDLEdBQVIsQ0FBZSxPQUFLQyxLQUFwQixpQkFBcUNKLE9BQU9LLElBQTVDLGNBQXlETCxPQUFPTSxNQUFQLENBQWNGLEtBQXZFO0FBQ0Q7QUFKTSxHO09BT1RHLE8sR0FBVTtBQUNSQyxRQURRLGtCQUNBO0FBQ04sV0FBS2pCLEdBQUwsR0FBVyxLQUFLQSxHQUFMLEdBQVcsQ0FBdEI7QUFDQVcsY0FBUUMsR0FBUixDQUFZLEtBQUtDLEtBQUwsR0FBYSxXQUF6Qjs7QUFFQSxXQUFLSyxLQUFMLENBQVcsWUFBWCxFQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixDQUEvQjtBQUNELEtBTk87QUFPUkMsU0FQUSxtQkFPQztBQUNQLFdBQUtuQixHQUFMLEdBQVcsS0FBS0EsR0FBTCxHQUFXLENBQXRCO0FBQ0FXLGNBQVFDLEdBQVIsQ0FBWSxLQUFLQyxLQUFMLEdBQWEsWUFBekI7QUFDRDtBQVZPLEc7O2tCQXBCU2hCLE8iLCJmaWxlIjoiY291bnRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbiAgLy8gaW1wb3J0IGFiYyBmcm9tICdhYmMnXHJcblxyXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIENvdW50ZXIgZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XHJcbiAgICBwcm9wcyA9IHtcclxuICAgICAgbnVtOiB7XHJcbiAgICAgICAgdHlwZTogW051bWJlciwgU3RyaW5nXSxcclxuICAgICAgICBjb2VyY2U6IGZ1bmN0aW9uICh2KSB7XHJcbiAgICAgICAgICByZXR1cm4gK3ZcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRlZmF1bHQ6IDUwXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBkYXRhID0ge1xyXG4gICAgfVxyXG4gICAgZXZlbnRzID0ge1xyXG4gICAgICAnaW5kZXgtYnJvYWRjYXN0JzogKC4uLmFyZ3MpID0+IHtcclxuICAgICAgICBsZXQgJGV2ZW50ID0gYXJnc1thcmdzLmxlbmd0aCAtIDFdXHJcbiAgICAgICAgY29uc29sZS5sb2coYCR7dGhpcy4kbmFtZX0gcmVjZWl2ZSAkeyRldmVudC5uYW1lfSBmcm9tICR7JGV2ZW50LnNvdXJjZS4kbmFtZX1gKVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbWV0aG9kcyA9IHtcclxuICAgICAgcGx1cyAoKSB7XHJcbiAgICAgICAgdGhpcy5udW0gPSB0aGlzLm51bSArIDFcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLiRuYW1lICsgJyBwbHVzIHRhcCcpXHJcblxyXG4gICAgICAgIHRoaXMuJGVtaXQoJ2luZGV4LWVtaXQnLCAxLCAyLCAzKVxyXG4gICAgICB9LFxyXG4gICAgICBtaW51cyAoKSB7XHJcbiAgICAgICAgdGhpcy5udW0gPSB0aGlzLm51bSAtIDFcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLiRuYW1lICsgJyBtaW51cyB0YXAnKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4iXX0=