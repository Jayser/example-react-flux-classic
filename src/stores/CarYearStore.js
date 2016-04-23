import EventEmitter from 'events';

import appDispatcher from '../dispatchers/AppDispatcher';

const store = {
  years: [
    {year: 2011},
    {year: 2012},
    {year: 2013},
    {year: 2014},
    {year: 2015}
  ]
};

const EVENT_CHANGE = 'change';

class CarYearStore extends EventEmitter {
  constructor() {
    super();

    this.dispatchToken = null;
  }

  getYears() {
    return store.years;
  }

  emitChange() {
    this.emit(EVENT_CHANGE);
  }

  addChangeListener(listener) {
    this.on(EVENT_CHANGE, listener);
  }

  removeChangeListener(listener) {
    this.removeListener(EVENT_CHANGE, listener);
  }
}

const carYearStore = new CarYearStore();

carYearStore.dispatchToken = appDispatcher.register(function() {
  // ...
});

export default carYearStore;

