require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import SelectWithLabel from '../simple/SelectWithLabel';
import carFormActions from '../../actions/CarFormActions';
import carFilterStore from '../../stores/CarFilterStore';
import carYearStore from '../../stores/CarYearStore';
import carManufacturerStore from '../../stores/CarManufacturerStore';
import carModelStore from '../../stores/CarModelStore';


class CarFilterFormComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = this.getCarFilterState();
  }

  componentDidMount() {
    carFilterStore.addChangeListener(() => () => this.onChangeSomeStore()());
    carYearStore.addChangeListener(() => this.onChangeSomeStore());
    carManufacturerStore.addChangeListener(() => this.onChangeSomeStore());
    carModelStore.addChangeListener(() => this.onChangeSomeStore());
  }

  componentWillUnmount() {
    carFilterStore.removeChangeListener(() => this.onChangeSomeStore());
    carYearStore.removeChangeListener(() => this.onChangeSomeStore());
    carManufacturerStore.removeChangeListener(() => this.onChangeSomeStore());
    carModelStore.removeChangeListener(() => this.onChangeSomeStore());
  }

  getCarFilterState() {
    return {
      year: carFilterStore.getYear(),
      manufacturerId: carFilterStore.getManufacturerId(),
      modelId: carFilterStore.getModelId(),
      yearItems: carYearStore.getYears().map((y) => {
        return {
          value: y.year,
          title: y.year
        };
      }),
      manufacturerItems: carManufacturerStore.getManufacturers().map((man) => {
        return {
          value: man.id,
          title: man.title
        };
      }),
      modelItems: carModelStore.getModels().map((m) => {
        return {
          value: m.id,
          title: m.title
        };
      })
    }
  }

  onChangeSomeStore() {
    this.setState(this.getCarFilterState());
  }

  onChangeYear(year) {
    carFormActions.selectYear(year);
  }

  onChangeManufacturer(manufacturerId) {
    carFormActions.selectManufacturer(manufacturerId);
  }

  onChangeModel(modelId) {
    carFormActions.selectModel(modelId);
  }

  render() {
    return (
      <div>
        <SelectWithLabel title='Year' items={this.state.yearItems} value={this.state.year} onChange={this.onChangeYear} />
        <SelectWithLabel title='Manufacturer' items={this.state.manufacturerItems} value={this.state.manufacturerId} onChange={this.onChangeManufacturer} />
        <SelectWithLabel title='Model' items={this.state.modelItems} value={this.state.modelId} onChange={this.onChangeModel} />
      </div>
    );
  }
}

CarFilterFormComponent.defaultProps = {
};

export default CarFilterFormComponent;


