import React, { Component } from 'react';
import './App.css';

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {isOpen: true};
    this.toggleOpen = this.toggleOpen.bind(this);
  }

  toggleOpen() {
    this.setState(state => ({
      isOpen: !state.isOpen,
    }));
  }
  render() {
    return (
      <div onClick={this.toggleOpen} className={this.state.isOpen ? 'sidebar': 'closed sidebar'}>
        {this.props.children}
      </div>
    );
  }
}

export default Sidebar;