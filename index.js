// Import NPM dependencies like this:
import React from 'react';
import ReactDOM from 'react-dom';

// Import styles like this:
import './styles/main.scss';

// Import dependencies like this:
import Beer from './components/beer.js';

class BeerApp extends React.Component {
  
  constructor() {
    super()
    
    this.state = {
      bars = []
    }
  }
  
  render() {
    return (
      <div>
        <h2>BeerTab</h2>
        
      </div>
    );
  }
}

ReactDOM.render(<BeerApp />, document.getElementById('app'));
