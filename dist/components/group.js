'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _groupitem = require('./groupitem.js');

var _groupitem2 = _interopRequireDefault(_groupitem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Group = function (_wepy$component) {
  _inherits(Group, _wepy$component);

  function Group() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Group);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Group.__proto__ || Object.getPrototypeOf(Group)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      grouplist: {},
      index: {}
    }, _this.$props = { "groupitem": { "v-bind:gitem.once": { "for": "grouplist.list", "item": "item", "index": "index", "key": "key", "value": "item" } } }, _this.$events = {}, _this.components = {
      groupitem: _groupitem2.default
    }, _this.methods = {
      tap: function tap() {
        this.grouplist.name = 'Parent Random(' + Math.random() + ')';
        console.log('Clicked Group ' + this.$index + ', ID is ' + this.grouplist.id);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return Group;
}(_wepy2.default.component);

exports.default = Group;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdyb3VwLmpzIl0sIm5hbWVzIjpbIkdyb3VwIiwicHJvcHMiLCJncm91cGxpc3QiLCJpbmRleCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiZ3JvdXBpdGVtIiwibWV0aG9kcyIsInRhcCIsIm5hbWUiLCJNYXRoIiwicmFuZG9tIiwiY29uc29sZSIsImxvZyIsIiRpbmRleCIsImlkIiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0U7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLEssR0FBUTtBQUNOQyxpQkFBVyxFQURMO0FBRU5DLGFBQU87QUFGRCxLLFFBS1RDLE0sR0FBUyxFQUFDLGFBQVksRUFBQyxxQkFBb0IsRUFBQyxPQUFNLGdCQUFQLEVBQXdCLFFBQU8sTUFBL0IsRUFBc0MsU0FBUSxPQUE5QyxFQUFzRCxPQUFNLEtBQTVELEVBQWtFLFNBQVEsTUFBMUUsRUFBckIsRUFBYixFLFFBQ1pDLE8sR0FBVSxFLFFBQ1RDLFUsR0FBYTtBQUNSQztBQURRLEssUUFHVkMsTyxHQUFVO0FBQ1JDLFNBRFEsaUJBQ0Q7QUFDTCxhQUFLUCxTQUFMLENBQWVRLElBQWYsc0JBQXVDQyxLQUFLQyxNQUFMLEVBQXZDO0FBQ0FDLGdCQUFRQyxHQUFSLG9CQUE2QixLQUFLQyxNQUFsQyxnQkFBbUQsS0FBS2IsU0FBTCxDQUFlYyxFQUFsRTtBQUNEO0FBSk8sSzs7OztFQVh1QixlQUFLQyxTOztrQkFBbkJqQixLIiwiZmlsZSI6Imdyb3VwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuICBpbXBvcnQgR3JvdXBJdGVtIGZyb20gJy4vZ3JvdXBpdGVtJ1xyXG5cclxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBHcm91cCBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcclxuICAgIHByb3BzID0ge1xyXG4gICAgICBncm91cGxpc3Q6IHt9LFxyXG4gICAgICBpbmRleDoge31cclxuICAgIH1cclxuXHJcbiAgICRwcm9wcyA9IHtcImdyb3VwaXRlbVwiOntcInYtYmluZDpnaXRlbS5vbmNlXCI6e1wiZm9yXCI6XCJncm91cGxpc3QubGlzdFwiLFwiaXRlbVwiOlwiaXRlbVwiLFwiaW5kZXhcIjpcImluZGV4XCIsXCJrZXlcIjpcImtleVwiLFwidmFsdWVcIjpcIml0ZW1cIn19fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cyA9IHtcclxuICAgICAgZ3JvdXBpdGVtOiBHcm91cEl0ZW1cclxuICAgIH1cclxuICAgIG1ldGhvZHMgPSB7XHJcbiAgICAgIHRhcCAoKSB7XHJcbiAgICAgICAgdGhpcy5ncm91cGxpc3QubmFtZSA9IGBQYXJlbnQgUmFuZG9tKCR7TWF0aC5yYW5kb20oKX0pYFxyXG4gICAgICAgIGNvbnNvbGUubG9nKGBDbGlja2VkIEdyb3VwICR7dGhpcy4kaW5kZXh9LCBJRCBpcyAke3RoaXMuZ3JvdXBsaXN0LmlkfWApXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiJdfQ==