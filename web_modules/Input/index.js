import React, { Component, PropTypes } from 'react';

export default class Input  extends Component {


  propTypes: {
    onChange: PropTypes.func,
    placeholder: PropTypes.string
  };

static defaultProps = {
  onChange:()=>{},
  placeholder: null

};

onChangeHandler = (event) => {
  console.log("onChangeHandler")
  const {
    onChange
  } = this.props

  this.setState({value: event.target.value});

  if (typeof onChange == "function") {
    onChange(event.target.value)
  }
};

render (){

  const {
    type,
    name,
    placeholder,
  } = this.props

  return (
    <input
      onChange={this.onChangeHandler}
      placeholder={placeholder} />

  );
  }
}
