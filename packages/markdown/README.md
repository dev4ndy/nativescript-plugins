# @dev4ndy/markdown

```javascript
ns plugin add @dev4ndy/markdown
```
A plugin for native markdown rendering.

Completely based on this code [code](https://github.com/flore2003/nativescript-markdown-view).

**Note**: All credit to [@flore2003](https://github.com/flore2003), what we did here was to start using the plugin template ([plugin-seed](https://github.com/NativeScript/plugin-seed)), update it and make it work with NS8... This plugin has only been tested on NS8.

## Usage 

### Angular
1. Register the element in apps module
 ```ts
registerElement("Markdown", () => require("@dev4ndy/markdown").Markdown);
@NgModule({
    ...
});
```
2. Now you can use it in you template
```html
<Markdown [markdown]="'_This_ should be **bold**!'"></Markdown>
```
---
### Vue
1. Register the element in the vue environment
```ts
Vue.registerElement( 'Markdown', () => require("@dev4ndy/markdown").Markdown )
```
---

You need to add `xmlns:mv="nativescript-markdown-view"` to your page tag, and then simply use `<mv:Markdown/>` in order to add the widget to your page.

```xml
<!-- test-page.xml -->
<Page xmlns="http://schemas.nativescript.org/tns.xsd" loaded="pageLoaded" xmlns:mv="markdown">
    <StackLayout class="p-20">
        <mv:Markdown markdown="_This_ should be **bold**!" />
    </StackLayout>
</Page>
```
---
## API

| Property | Default | Description |
| --- | --- | --- |
| markdown | "" | The markdown to be rendered on screen |

## License

Apache License Version 2.0
