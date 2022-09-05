import { fontSizeProperty } from '@nativescript/core';
import { MarkdownCommon, markdownProperty } from './common';
import InputType = android.text.InputType;

declare var io: any;
const md = io.noties.markwon;
export class Markdown extends MarkdownCommon {
  markwon: any;

  // @ts-ignore
  get android(): android.widget.TextView {
    return new android.widget.TextView(this._context);
  }

  public createNativeView() {
    const img = io.noties.markwon.image;
    this.markwon = md.Markwon.builder(this._context).usePlugin(img.ImagesPlugin.create()).build();
    this.android.setInputType(InputType.TYPE_NULL);
    return this.android;
  }

  [fontSizeProperty.setNative](fontSize: number) {
    this.android.setTextSize(Number(fontSize));
  }

  [markdownProperty.setNative](markdown: string) {
    this.markwon.setMarkdown(this.nativeView, markdown);
  }
}
