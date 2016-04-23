import EventEmitter from 'events';

import appDispatcher from '../dispatchers/AppDispatcher';
import carFormConstants from '../constants/CarFormConstants'

const store = {
  year: null,
  manufacturerId: null,
  modelId: null
};

const EVENT_CHANGE = 'change';

function setYear(year) {
  store.year = year;
}

function setManufacturerId(manufacturerId) {
  store.manufacturerId = manufacturerId;
}

function setModelId(modelId) {
  store.modelId = modelId;
}

class CarFilterStore extends EventEmitter {
  constructor() {
    super();

    this.dispatchToken = null;
  }

  getYear() {
    return store.year;
  }

  getManufacturerId() {
    return store.manufacturerId;
  }

  getModelId() {
    return store.modelId;
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

const carFilterStore = new CarFilterStore();

carFilterStore.dispatchToken = appDispatcher.register(function(action) {
  switch(action.actionType) {
    case carFormConstants.CAR_FORM_SELECT_YEAR:
      setYear(
        parseInt(action.year, 10)
      );

      carFilterStore.emitChange();
      break;

    case carFormConstants.CAR_FORM_SELECT_MANUFACTURER:
      setManufacturerId(
        parseInt(action.manufacturerId, 10)
      );

      carFilterStore.emitChange();
      break;

    case carFormConstants.CAR_FORM_SELECT_MODEL:
      setModelId(
        parseInt(action.modelId, 10)
      );

      carFilterStore.emitChange();
      break;
  }
});

export default carFilterStore;

