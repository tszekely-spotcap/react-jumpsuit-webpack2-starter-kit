import React from 'react';
// import { Component } from 'jumpsuit';
import Component from 'jumpsuit/lib/component';

import './App.less';

const App = Component({
  render() {
    return (
      <main>
        <header>
          headeeer
        </header>

        { React.cloneElement(this.props.children) }

        <footer>
          footeeer
        </footer>
      </main>
    );
  }
});

export default App;
