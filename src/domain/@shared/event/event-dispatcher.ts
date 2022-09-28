import EventDispatcherInterface from "./event-dispatcher.interface";
import eventInterface from "./event.interface";

export default class EventDispatcher implements EventDispatcherInterface {
  notify(event: eventInterface): void {
    
  }

  register(eventName: string, eventHandler: EventHandlerInterface): void {
  }

  unregister(eventName: string, eventHandler: EventHandlerInterface): void {
  }

  unresterAll(): void {
  }
} 
