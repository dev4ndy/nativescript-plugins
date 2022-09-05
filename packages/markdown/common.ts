import { CSSType, Property, TextView } from '@nativescript/core';

@CSSType('Markdown')
export class MarkdownCommon extends TextView {
  /**
   * Gets the native [android widget](http://developer.android.com/reference/android/widget/TextView.html) that represents the user interface for this component. Valid only when running on Android OS.
   */
  android: any /* android.widget.TextView */;

  /**
   * Gets the native UITextView that represents the user interface for this component. Valid only when running on iOS.
   */
  ios: any /* UITextView */;
}

export const markdownProperty = new Property<MarkdownCommon, string>({
  name: 'markdown',
  defaultValue: '',
  affectsLayout: true,
});

markdownProperty.register(MarkdownCommon);
