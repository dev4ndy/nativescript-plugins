import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { MarkdownComponent } from './markdown.component';

@NgModule({
  imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: MarkdownComponent }])],
  declarations: [MarkdownComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class MarkdownModule {}
