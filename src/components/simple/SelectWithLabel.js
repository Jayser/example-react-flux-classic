require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import Select from './Select';

class SelectWithLabelComponent extends React.Component {
  render() {
    return (
      <div>
        <label>
          {this.props.title}<br/>
          <Select items={this.props.items} onChange={this.props.onChange}></Select>
        </label>
      </div>
    );
  }
}

SelectWithLabelComponent.defaultProps = {
};

export default SelectWithLabelComponent;
