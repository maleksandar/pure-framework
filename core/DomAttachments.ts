export abstract class DomAttachments<T> {
  clickHandlers: ((event) => any)[] = [];
  onClick(...handlers: ((event: Event) => void)[]) {
    this.clickHandlers.push(...handlers);
    return <T><unknown>this;
  }
}