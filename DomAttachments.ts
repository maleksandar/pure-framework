export abstract class DomAttachments {
  clickHandlers: ((event) => any)[] = [];
  onClick(...handlers: ((event: Event) => void)[]): DomAttachments {
    this.clickHandlers.push(...handlers);
    return this;
  }
}