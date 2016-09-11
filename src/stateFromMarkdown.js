/* @flow */

import MarkdownParser from './MarkdownParser';
const {stateFromElement} = require('../../draft-js-import-element/lib/main')

const {ContentState} = global.Draft

export default function stateFromMarkdown(markdown: string): ContentState {
  let element = MarkdownParser.parse(markdown, {getAST: true});
  return stateFromElement(element);
}
