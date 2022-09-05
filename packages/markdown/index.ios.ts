import { Color, colorProperty, fontSizeProperty } from '@nativescript/core';
import { MarkdownCommon, markdownProperty } from './common';

export class Markdown extends MarkdownCommon {
  _ios: UITextView;

  mdParser: TSMarkdownParser;

  _currentMarkdown: string;

  _fontSize: number;

  _color: UIColor;

  constructor() {
    super();
    this._ios = super.createNativeView() as UITextView;
    this.mdParser = TSMarkdownParser.standardParser();
    this._ios.editable = false;
    this._ios.selectable = true;
    this._ios.scrollEnabled = false;
  }

  // @ts-ignore
  get ios() {
    return this._ios;
  }

  public createNativeView() {
    return this._ios;
  }

  [fontSizeProperty.setNative](fontSize: number) {
    this._fontSize = fontSize;
    this._updateStyling();
  }

  [colorProperty.setNative](value: Color | UIColor) {
    this._color = value instanceof Color ? value.ios : value;
    this._updateStyling();
  }

  [markdownProperty.setNative](markdown: string) {
    this._currentMarkdown = markdown;
    this._updateMarkdown();
  }

  private _updateMarkdown() {
    if (this._currentMarkdown) {
      this._ios.attributedText = this.mdParser.attributedStringFromMarkdown(this._currentMarkdown);
    } else {
      this._ios.text = '';
    }
  }

  private _updateStyling() {
    const defaultAttributes = NSDictionary.dictionaryWithObjectsForKeys([UIFont.systemFontOfSize(this._fontSize), this._color], [NSFontAttributeName, NSForegroundColorAttributeName]);
    const emphasisAttributes = NSDictionary.dictionaryWithObjectsForKeys([UIFont.italicSystemFontOfSize(this._fontSize)], [NSFontAttributeName]);
    const strongAttributes = NSDictionary.dictionaryWithObjectsForKeys([UIFont.boldSystemFontOfSize(this._fontSize)], [NSFontAttributeName]);

    this.mdParser.defaultAttributes = defaultAttributes;
    this.mdParser.emphasisAttributes = emphasisAttributes;
    this.mdParser.strongAttributes = strongAttributes;
    this._updateMarkdown();
  }
}
