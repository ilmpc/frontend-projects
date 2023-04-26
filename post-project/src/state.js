export class State {
  constructor(initialState = {}) {
    this.userId = initialState.userId ?? 1;
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

  nextUser() {
    if (this.userId < 10) {
      this.userId++;
      this.emitChange();
    }
  }
  prevUser() {
    if (this.userId > 1) {
      this.userId--;
      this.emitChange();
    }
  }
}
