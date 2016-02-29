import React, {Component, PropTypes} from 'react';

class App extends Component {
  handleIncrease() {
    this.props.increase();
  }

  handleDecrease() {
    this.props.decrease();
  }

  render() {
    return <div>
	     <button onClick={this.handleIncrease.bind(this)}></button>
	     <button onClick={this.handleDecrease.bind(this)}></button>
	   </div>
  }
}

App.propTypes = {
  increase: PropTypes.func.isRequired,
  decrease: PropTypes.func.isRequired
}

export default App;
