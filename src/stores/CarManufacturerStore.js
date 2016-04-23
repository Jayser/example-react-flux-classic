import EventEmitter from 'events';

import appDispatcher from '../dispatchers/AppDispatcher';

const store = {
  manufacturers: [
    {id: 1, title: 'BMW'},
    {id: 2, title: 'Audi'},
    {id: 3, title: 'Ford'}
  ]
};

const EVENT_CHANGE = 'change';

class CarManufacturerStore extends EventEmitter {
  constructor() {
    super();

    this.dispatchToken = null;
  }

  getManufacturers() {
    return store.manufacturers;
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

const carManufacturerStore = new CarManufacturerStore();

carManufacturerStore.dispatchToken = appDispatcher.register(function() {
  // ...
});

export default carManufacturerStore;

