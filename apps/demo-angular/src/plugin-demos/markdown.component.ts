import { Component, NgZone } from '@angular/core';
import { DemoSharedMarkdown } from '@demo/shared';

@Component({
  selector: 'demo-markdown',
  templateUrl: 'markdown.component.html',
})
export class MarkdownComponent {
  demoShared: DemoSharedMarkdown;

  constructor(private _ngZone: NgZone) {}

  ngOnInit() {
    this.demoShared = new DemoSharedMarkdown();
  }
}
