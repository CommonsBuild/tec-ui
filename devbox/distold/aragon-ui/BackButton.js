'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var slicedToArray = require('./slicedToArray-a8a77f0e.js');
require('./unsupportedIterableToArray-f175acfa.js');
var React = require('react');
require('./_commonjsHelpers-1b94f6bc.js');
var index$1 = require('./index-46d0e707.js');
require('./defineProperty-3cad0327.js');
require('./toConsumableArray-cc0d28a9.js');
var _styled = require('styled-components');
require('./getPrototypeOf-55c9e80c.js');
require('./color.js');
require('./css.js');
require('./miscellaneous.js');
require('./environment.js');
require('./font.js');
require('./keycodes.js');
var constants = require('./constants.js');
require('./breakpoints.js');
require('./text-styles.js');
require('./theme-dark.js');
require('./theme-light.js');
var Theme = require('./Theme.js');
var _extends = require('./extends-023d783e.js');
var objectWithoutProperties = require('./objectWithoutProperties-c6d3675c.js');
var index = require('./index-4def0554.js');
require('./_baseGetTag-42b4dd3e.js');
require('./Viewport-7370d91c.js');
var Layout = require('./Layout.js');
require('./FocusVisible.js');
var ButtonBase = require('./ButtonBase.js');
require('./IconPropTypes-7e73e8fe.js');
var IconArrowLeft = require('./IconArrowLeft.js');
var Bar = require('./Bar.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var _styled__default = /*#__PURE__*/_interopDefaultLegacy(_styled);

var _StyledButtonBase = _styled__default['default'](ButtonBase['default']).withConfig({
  displayName: "BackButton___StyledButtonBase",
  componentId: "sc-1r0ebxr-0"
})(["display:inline-flex;align-items:center;border-radius:0 0 0 0;height:100%;margin-left:", "px;padding:0 ", "px 0 ", "px;border-right:1px solid ", ";color:", ";background:", ";&:active{background:", ";}"], function (p) {
  return p._css;
}, function (p) {
  return p._css2;
}, function (p) {
  return p._css3;
}, function (p) {
  return p._css4;
}, function (p) {
  return p._css5;
}, function (p) {
  return p._css6;
}, function (p) {
  return p._css7;
});

var _StyledSpan = _styled__default['default']("span").withConfig({
  displayName: "BackButton___StyledSpan",
  componentId: "sc-1r0ebxr-1"
})(["position:relative;top:2px;color:", ";"], function (p) {
  return p._css8;
});

var _StyledSpan2 = _styled__default['default']("span").withConfig({
  displayName: "BackButton___StyledSpan2",
  componentId: "sc-1r0ebxr-2"
})(["padding-left:", "px;font-size:16px;font-weight:600;"], function (p) {
  return p._css9;
});

function BackButton(_ref) {
  var label = _ref.label,
      props = objectWithoutProperties.objectWithoutProperties(_ref, ["label"]);

  var theme = Theme.useTheme();

  var _useInside = index.o('Bar:primary'),
      _useInside2 = slicedToArray.slicedToArray(_useInside, 1),
      insideBarPrimary = _useInside2[0];

  var _useLayout = Layout.useLayout(),
      layoutName = _useLayout.layoutName;

  var compact = layoutName === 'small';
  var horizontalPadding = (compact ? 2 : 3) * constants.GU;
  return /*#__PURE__*/React__default['default'].createElement(_StyledButtonBase, _extends._extends_1({
    focusRingSpacing: 1
  }, props, {
    _css: insideBarPrimary ? -Bar['default'].PADDING : 0,
    _css2: horizontalPadding,
    _css3: horizontalPadding - 4,
    _css4: theme.border,
    _css5: theme.surfaceContentAuxiliar,
    _css6: theme.surfaceInteractive,
    _css7: theme.surfaceHighlight
  }), /*#__PURE__*/React__default['default'].createElement(_StyledSpan, {
    _css8: theme.surfaceContentAuxiliar
  }, /*#__PURE__*/React__default['default'].createElement(IconArrowLeft['default'], null)), /*#__PURE__*/React__default['default'].createElement(_StyledSpan2, {
    _css9: 1 * constants.GU
  }, label));
}

BackButton.propTypes = {
  label: index$1.propTypes.string
};
BackButton.defaultProps = {
  label: 'Back'
};

exports.default = BackButton;
//# sourceMappingURL=BackButton.js.map
