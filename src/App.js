import React, { Component } from 'react';
import './App.css';

import Block from './Block';
import Sidebar from './Sidebar';

class App extends Component {
  constructor(props){
    super(props);
    this.state = { showSidebar: true };
}

toggleSidebar() {
    this.state.showSidebar = !this.state.showSidebar 
}
  render() {
    return (
      <div className="App">
        <nav>
          <p>navigation</p>
        </nav>
        <main>
          <Sidebar toggleFunction={this.toggleSidebar}>
            <button className="toggle" showSidebar={this.state.showSidebar}/>
          </Sidebar> 
          <section>
            <Block>
              <div className="innerBlock" style={{ backgroundColor: "#fb827e", height: "100%" }}></div>
            </Block>
            <Block>
              <div className="innerBlock" style={{ backgroundColor: "#c47684", height: "100%" }}></div>
            </Block>
            <Block>
              <div className="innerBlock" style={{ backgroundColor: "#6c5f7c", height: "100%"  }}></div>
            </Block>
            <Block>
              <div className="innerBlock" style={{ backgroundColor: "#34587d", height: "100%"  }}></div>
            </Block>
          </section>
        </main>
      </div>
    );
  }
}

export default App;
