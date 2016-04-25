import EventEmitter from 'events';

import appDispatcher from '../dispatchers/AppDispatcher';
import carFormConstants from '../constants/CarFormConstants';
import carFilterStore from '../stores/CarFilterStore';

const store = {
  models: []
};

function setModels(models) {
  store.models = models;
}

const EVENT_CHANGE = 'change';

class CarFilterModelStore extends EventEmitter {
  constructor() {
    super();

    this.dispatchToken = null;
  }

  getModels() {
    return store.models;
  }

  checkAndLoad(year, manufacturerId) {
    if (year && manufacturerId) {
      this.request(year, manufacturerId).then((models) => {
        setModels(models);
        this.emitChange();
      });
    }
  }

  request(year, manufacturerId) {
    return new Promise(function (resolve) {
      setTimeout(function () {
        [year, manufacturerId];
        resolve([
          {id: 1, title: 'BMW X5'},
          {id: 2, title: 'Audi Q7'},
          {id: 3, title: 'Ford Fiesta'}
        ]);
      }, 1000);
    });
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

const carFilterModelStore = new CarFilterModelStore();

carFilterModelStore.dispatchToken = appDispatcher.register(function(action) {
  switch(action.actionType) {
    case carFormConstants.CAR_FORM_SELECT_YEAR:
    case carFormConstants.CAR_FORM_SELECT_MANUFACTURER:
      appDispatcher.waitFor([carFilterStore.dispatchToken]);
      carFilterModelStore.checkAndLoad(carFilterStore.getYear(), carFilterStore.getManufacturerId());
      break;
  }
});

export default carFilterModelStore;

