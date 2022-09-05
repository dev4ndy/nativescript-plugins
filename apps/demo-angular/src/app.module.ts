import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule, registerElement } from '@nativescript/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';

registerElement('Markdown', () => require('@dev4ndy/markdown').Markdown);
@NgModule({
  schemas: [NO_ERRORS_SCHEMA],
  declarations: [AppComponent, HomeComponent],
  bootstrap: [AppComponent],
  imports: [NativeScriptModule, AppRoutingModule],
})
export class AppModule {}
