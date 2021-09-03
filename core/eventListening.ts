export interface EventListening {
  on: (event: string, ...handlers: ((event: Event) => void)[]) => this,
}