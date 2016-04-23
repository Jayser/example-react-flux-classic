import {Dispatcher} from 'flux';

const appDispatcher = new Dispatcher();
const dispatch = appDispatcher.dispatch;
appDispatcher.dispatch = function (action) {
  /* eslint-disable */
  console.log('Action: ', action);
  /* eslint-disable */

  dispatch.apply(this, arguments);
};

export default appDispatcher;
