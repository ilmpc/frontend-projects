export class State {
  constructor(initialState = {}) {
    this.state = initialState.state ?? "start"; // start, pause*, running, end
    this.initialTimer = initialState.initialTimer ?? 60;
    this.currentTimer = 0;
    this.changeListener = null;
  }

  emitChange() {
    if (this.changeListener) {
      this.changeListener(this);
    }
  }

  setChangeListener(callback) {
    this.changeListener = callback;
    this.emitChange();
  }
}
