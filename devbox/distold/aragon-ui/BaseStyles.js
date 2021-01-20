'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('./slicedToArray-a8a77f0e.js');
require('./unsupportedIterableToArray-f175acfa.js');
var React = require('react');
require('./_commonjsHelpers-1b94f6bc.js');
var index = require('./index-46d0e707.js');
require('./defineProperty-3cad0327.js');
require('./toConsumableArray-cc0d28a9.js');
var _styled = require('styled-components');
require('./getPrototypeOf-55c9e80c.js');
require('./color.js');
require('./miscellaneous.js');
require('./environment.js');
var font = require('./font.js');
require('./url.js');
var textStyles = require('./text-styles.js');
require('./theme-dark.js');
require('./theme-light.js');
var Theme = require('./Theme.js');
var _extends = require('./extends-023d783e.js');
require('./getDisplayName-7f913e84.js');
var PublicUrl = require('./PublicUrl-7d4b6d6d.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

var taggedTemplateLiteral = _taggedTemplateLiteral;

var baiJamjureeLightWoff2 = "80a2d6844ca190c2.woff2";

var baiJamjureeRegularWoff2 = "793f0087f2572f20.woff2";

var baiJamjureeSemiBoldWoff2 = "6e06704ad43a601f.woff2";

var baiJamjureeBoldWoff2 = "13634910246653a8.woff2";

var interLightWoff2 = "4e7c5c7ac23d7f7a.woff2";

var interRegularWoff2 = "7b52ac6f38f16ef8.woff2";

var interSemiBoldWoff2 = "79fd2e20f8798683.woff2";

var interBoldWoff2 = "2fd4e214797fc703.woff2";

function _templateObject() {
  var data = taggedTemplateLiteral(["\n\n  // @font-face declarations\n  ", "\n\n  *, *:before, *:after {\n    box-sizing: border-box;\n  }\n  html {\n    -webkit-overflow-scrolling: touch;\n  }\n  body {\n    height: 0;\n    min-height: 100vh;\n    color: ", ";\n    background: ", ";\n    font-family: ", ";\n    ", ";\n  }\n  html, body {\n    overflow: hidden;\n  }\n  body, ul, p, h1, h2, h3, h4, h5, h6 {\n    margin: 0;\n    padding: 0;\n  }\n  button {\n    font-size: inherit;\n    font-family: ", ";\n    font-weight: 900;\n    line-height: inherit;\n  }\n  select, input, textarea, h1, h2, h3, h4, h5, h6 {\n    font-size: inherit;\n    font-family: ", ";\n    font-weight: inherit;\n    line-height: inherit;\n  }\n  a, button, select, input, textarea {\n    color: inherit;\n  }\n  strong, b {\n    font-weight: 900;\n  }\n  ::selection {\n    background: ", ";\n    color: ", ";\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var INTER_FONTS = {
  '400': {
    url: interLightWoff2,
    format: 'woff2'
  },
  '600': {
    url: interRegularWoff2,
    format: 'woff2'
  },
  '800': {
    url: interSemiBoldWoff2,
    format: 'woff2'
  },
  '900': {
    url: interBoldWoff2,
    format: 'woff2'
  }
};
var BAI_JAMJUREE_FONTS = {
  '400': {
    url: baiJamjureeLightWoff2,
    format: 'woff2'
  },
  '600': {
    url: baiJamjureeRegularWoff2,
    format: 'woff2'
  },
  '800': {
    url: baiJamjureeSemiBoldWoff2,
    format: 'woff2'
  },
  '900': {
    url: baiJamjureeBoldWoff2,
    format: 'woff2'
  }
};

function fontSrc(publicUrl, _ref) {
  var url = _ref.url,
      format = _ref.format;
  console.log("url(".concat(publicUrl + url, ") format('").concat(format, "')"));
  return "url(".concat(publicUrl + url, ") format('").concat(format, "')");
}

function fontFaceDeclarations(_ref2) {
  var fontFamily = _ref2.fontFamily,
      publicUrl = _ref2.publicUrl;

  // No need to declare the font faces if the font family has changed.
  if (fontFamily !== BaseStyles.defaultProps.fontFamily) {
    return '';
  }

  return "\n    @font-face {\n      font-family: ".concat(font.INTER_FONT_FAMILY, ";\n      src: ").concat(fontSrc(publicUrl, INTER_FONTS['400']), ";\n      font-weight: 400;\n      font-style: normal;\n    }\n    @font-face {\n      font-family: ").concat(font.INTER_FONT_FAMILY, ";\n      src: ").concat(fontSrc(publicUrl, INTER_FONTS['600']), ";\n      font-weight: 600;\n      font-style: normal;\n    }\n    @font-face {\n      font-family: ").concat(font.INTER_FONT_FAMILY, ";\n      src: ").concat(fontSrc(publicUrl, INTER_FONTS['800']), ";\n      font-weight: 800;\n      font-style: normal;\n    }\n    @font-face {\n      font-family: ").concat(font.INTER_FONT_FAMILY, ";\n      src: ").concat(fontSrc(publicUrl, INTER_FONTS['900']), ";\n      font-weight: 900;\n      font-style: normal;\n    }\n    @font-face {\n      font-family: ").concat(font.BAIJAMJUREE_FONT_FAMILY, ";\n      src: ").concat(fontSrc(publicUrl, BAI_JAMJUREE_FONTS['400']), ";\n      font-weight: 400;\n      font-style: normal;\n    }\n    @font-face {\n      font-family: ").concat(font.BAIJAMJUREE_FONT_FAMILY, ";\n      src: ").concat(fontSrc(publicUrl, BAI_JAMJUREE_FONTS['600']), ";\n      font-weight: 600;\n      font-style: normal;\n    }\n    @font-face {\n      font-family: ").concat(font.BAIJAMJUREE_FONT_FAMILY, ";\n      src: ").concat(fontSrc(publicUrl, BAI_JAMJUREE_FONTS['800']), ";\n      font-weight: 800;\n      font-style: normal;\n    @font-face {\n      font-family: ").concat(font.BAIJAMJUREE_FONT_FAMILY, ";\n      src: ").concat(fontSrc(publicUrl, BAI_JAMJUREE_FONTS['900']), ";\n      font-weight: 900;\n      font-style: normal;\n  ");
}

var BaseStyles = /*#__PURE__*/React__default['default'].memo(function BaseStyles(props) {
  var theme = Theme.useTheme();
  return /*#__PURE__*/React__default['default'].createElement(GlobalStyle, _extends._extends_1({}, props, {
    theme: theme,
    fontFaces: fontFaceDeclarations(props),
    textStyleCss: textStyles.textStyle('body2')
  }));
});
BaseStyles.propTypes = {
  publicUrl: index.propTypes.string,
  fontFamily: index.propTypes.string,
  componentsFontFamily: index.propTypes.string
};
BaseStyles.defaultProps = {
  publicUrl: '/',
  fontFamily: "".concat(font.INTER_FONT_FAMILY, ", sans-serif"),
  componentsFontFamily: "".concat(font.BAIJAMJUREE_FONT_FAMILY, ", sans-serif")
};
var GlobalStyle = _styled.createGlobalStyle(_templateObject(), function (p) {
  return p.fontFaces ? p.fontFaces : '';
}, function (p) {
  return p.theme.content;
}, function (p) {
  return p.theme.background;
}, function (p) {
  return p.fontFamily;
}, function (p) {
  return p.textStyleCss;
}, function (p) {
  return p.componentsFontFamily;
}, function (p) {
  return p.fontFamily;
}, function (p) {
  return p.theme.selected;
}, function (p) {
  return p.theme.selectedContent;
});
var BaseStyles$1 = PublicUrl.PublicUrl.hocWrap(BaseStyles);

exports.default = BaseStyles$1;
//# sourceMappingURL=BaseStyles.js.map
