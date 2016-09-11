'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = stateFromMarkdown;

var _MarkdownParser = require('./MarkdownParser');

var _MarkdownParser2 = _interopRequireDefault(_MarkdownParser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _require = require('../../draft-js-import-element/lib/main');

var stateFromElement = _require.stateFromElement;
var ContentState = global.Draft.ContentState;
function stateFromMarkdown(markdown) {
  var element = _MarkdownParser2.default.parse(markdown, { getAST: true });
  return stateFromElement(element);
}