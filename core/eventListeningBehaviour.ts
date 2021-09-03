import { EventListening } from "./eventListening";
import { FunctionalElement } from "./functionalElement";

export class EventListeningBehaviour implements EventListening {
  private eventHandlers: { event: string; handlers: ((event: any) => any)[]; }[] = [];
  constructor(private decoratedElement: FunctionalElement) { }

  public on(event: string, ...handlers: ((event: Event) => void)[]) {
    this.eventHandlers.push({event, handlers});
    return this;
  };

  public attachEventHandlers(): void {
    if (this.eventHandlers) {
        this.eventHandlers.forEach(event => {
            event.handlers.forEach(handler => {
              this.decoratedElement.domElement.addEventListener(event.event, handler);
            });
        });
    }
}
}