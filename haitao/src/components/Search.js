import React, { Component } from 'react';
import { SearchBar } from 'antd-mobile';

class Com extends Component {
  state = {
    value: '美食',
  };
  onChange= (value) => {
    this.setState({ value });
  };
  clear = () => {
    this.setState({ value: '' });
  };
  handleClick = () => {
    this.manualFocusInst.focus();
  }
  render () {
    return (
      <div>
        <SearchBar
          value={this.state.value}
          placeholder="Search"
          onSubmit={value => console.log(value, 'onSubmit')}
          onClear={value => console.log(value, 'onClear')}
          onFocus={() => console.log('onFocus')}
          onBlur={() => console.log('onBlur')}
          onCancel={() => console.log('onCancel')}
          showCancelButton
          onChange={this.onChange}
        />
      </div>
    )
  }
}

export default Com;