import React, {Component, PropTypes} from 'react';

class Button extends Component {
  handleClick() {
    this.props.unary();
  }

  render() {
    return <button onClick={this.handleClick.bind(this)}></button>
  }
}

Button.propTypes = {
  unary: PropTypes.func.isRequired
}

export default Button;
