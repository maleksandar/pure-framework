export interface EventListening {
  on: (event: keyof HTMLElementEventMap, ...handlers: ((event: Event) => void)[]) => this,
}