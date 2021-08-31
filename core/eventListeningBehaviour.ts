import { EventListening } from "./eventListening";
import { FunctionalElement } from "./functionalElement";

export class EventListeningBehaviour implements EventListening {
  eventHandlers: { event: keyof HTMLElementEventMap; handlers: ((event: any) => any)[]; }[] = [];
  constructor(private decorate: FunctionalElement) { }

  public on(event: keyof HTMLElementEventMap, ...handlers: ((event: Event) => void)[]) {
    this.eventHandlers.push({event, handlers});
    return this;
  };

  public attachEventHandlers(): void {
    if (this.eventHandlers) {
        this.eventHandlers.forEach(event => {
            event.handlers.forEach(handler => {
              this.decorate.domElement.addEventListener(event.event, handler);
            });
        });
    }
}
}