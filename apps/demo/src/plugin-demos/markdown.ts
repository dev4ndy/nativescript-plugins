import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedMarkdown } from '@demo/shared';
import {} from '@dev4ndy/markdown';

export function navigatingTo(args: EventData) {
  const page = <Page>args.object;
  page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedMarkdown {}
