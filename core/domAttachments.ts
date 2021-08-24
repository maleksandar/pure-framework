export abstract class DomAttachments<T> {
  eventHandlers: { event: keyof HTMLElementEventMap , handlers: ((event) => any)[] }[] = [];
  domElement: any;
  on(event: keyof HTMLElementEventMap, ...handlers: ((event: Event) => void)[]) {
    this.eventHandlers.push({event, handlers});
    return <T><unknown>this;
  };

  protected attachEventHandlers(): void {
    if (this.eventHandlers) {
        this.eventHandlers.forEach(event => {
            event.handlers.forEach(handler => {
                this.domElement.addEventListener(event.event, handler);
            });
        });
    }
}
}