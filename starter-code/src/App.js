import React, { Component } from 'react';
import IdCard from './components/IdCard'
import LikeButton from './components/LikeButton'

import { ListItems } from './components/ListItems'

class App extends Component {
  render() {
    return (
      <div className="App">
        <ListItems></ListItems>
      </div>
    );
  }
}

export default App;
