import appDispatcher from '../dispatchers/AppDispatcher'
import carFormConstants from '../constants/CarFormConstants'

class CarFormActions {
  selectYear(year) {
    appDispatcher.dispatch({
      actionType: carFormConstants.CAR_FORM_SELECT_YEAR,
      year: year
    });
  }

  selectManufacturer(manufacturerId) {
    appDispatcher.dispatch({
      actionType: carFormConstants.CAR_FORM_SELECT_MANUFACTURER,
      manufacturerId: manufacturerId
    });
  }

  selectModel(modelId) {
    appDispatcher.dispatch({
      actionType: carFormConstants.CAR_FORM_SELECT_MODEL,
      modelId: modelId
    });
  }
}

export default new CarFormActions();
