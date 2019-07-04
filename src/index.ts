class EventBus {
  dispatch(eventName: string, payload: object): void {}

  addEventListener(eventName: string, callback?: (payload?: object) => void): void {}

  removeEventListener(eventName: string) {}

  once(eventName: string, payload: object): void {}
}


export default EventBus;
