require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import CarFilterForm from './composite/CarFilterForm';

class AppComponent extends React.Component {
  render() {
    return (
      <div>
        <CarFilterForm></CarFilterForm>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
