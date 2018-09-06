import React, { Component } from 'react';
import './App.css';

class Block extends Component {
  constructor(props) {
    super(props);
    this.state = {isActive: true};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isActive: !state.isActive,
    }));
  }
  render() {
    return (
      <div onClick={this.handleClick} className={this.state.isActive ? 'block': 'active block'}>
        {this.props.children}
      </div>
    );
  }
}

export default Block;