import React from 'react';
// import axios from 'axios';
import Layout from './components/Layout';
import './App.css'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <div className="myApp">
        <Layout />
      </div>
    )
  }
}

export default App;
