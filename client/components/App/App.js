import React from 'react';
import { Component } from 'jumpsuit';

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
