import slicedToArray from '../../../node_modules/@babel/runtime/helpers/slicedToArray.js';
import React from 'react';
import propTypes from '../../../node_modules/prop-types/index.js';
import _styled from 'styled-components';
import { GU } from '../../style/constants.js';
import { useTheme } from '../../theme/Theme2.js';
import _extends_1 from '../../../node_modules/@babel/runtime/helpers/extends.js';
import objectWithoutProperties from '../../../node_modules/@babel/runtime/helpers/objectWithoutProperties.js';
import { useInside as o } from '../../../node_modules/use-inside/dist/index.js';
import { useLayout } from '../Layout/Layout.js';
import ButtonBaseWithFocus from '../ButtonBase/ButtonBase.js';
import IconArrowLeft from '../../icons/components/IconArrowLeft.js';
import Bar from '../Bar/Bar.js';

var _StyledButtonBase = _styled(ButtonBaseWithFocus).withConfig({
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

var _StyledSpan = _styled("span").withConfig({
  displayName: "BackButton___StyledSpan",
  componentId: "sc-1r0ebxr-1"
})(["position:relative;top:2px;color:", ";"], function (p) {
  return p._css8;
});

var _StyledSpan2 = _styled("span").withConfig({
  displayName: "BackButton___StyledSpan2",
  componentId: "sc-1r0ebxr-2"
})(["padding-left:", "px;font-size:16px;font-weight:600;"], function (p) {
  return p._css9;
});

function BackButton(_ref) {
  var label = _ref.label,
      props = objectWithoutProperties(_ref, ["label"]);

  var theme = useTheme();

  var _useInside = o('Bar:primary'),
      _useInside2 = slicedToArray(_useInside, 1),
      insideBarPrimary = _useInside2[0];

  var _useLayout = useLayout(),
      layoutName = _useLayout.layoutName;

  var compact = layoutName === 'small';
  var horizontalPadding = (compact ? 2 : 3) * GU;
  return /*#__PURE__*/React.createElement(_StyledButtonBase, _extends_1({
    focusRingSpacing: 1
  }, props, {
    _css: insideBarPrimary ? -Bar.PADDING : 0,
    _css2: horizontalPadding,
    _css3: horizontalPadding - 4,
    _css4: theme.border,
    _css5: theme.surfaceContentAuxiliar,
    _css6: theme.surfaceInteractive,
    _css7: theme.surfaceHighlight
  }), /*#__PURE__*/React.createElement(_StyledSpan, {
    _css8: theme.surfaceContentAuxiliar
  }, /*#__PURE__*/React.createElement(IconArrowLeft, null)), /*#__PURE__*/React.createElement(_StyledSpan2, {
    _css9: 1 * GU
  }, label));
}

BackButton.propTypes = {
  label: propTypes.string
};
BackButton.defaultProps = {
  label: 'Back'
};

export default BackButton;
//# sourceMappingURL=BackButton.js.map
