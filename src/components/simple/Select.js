require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

class SelectComponent extends React.Component {
  onChange(e) {
    this.props.onChange(e.target.value);
  }

  render() {
    return (
      <select onChange={(e) => this.onChange(e)}>
        <option value={-1}>Please select item</option>
        {this.props.items.map((item, i) => {
          return <option key={i} value={item.value}>{item.title}</option>
        })}
      </select>
    );
  }
}

SelectComponent.defaultProps = {
};

export default SelectComponent;
