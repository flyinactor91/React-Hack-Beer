// Import NPM dependencies like this:
import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

// Import styles like this:
import './styles/main.scss';

// Import dependencies like this:
import Bar from './components/bar.js';
import Beer from './components/beer.js';

class BeerApp extends React.Component {
  
  constructor() {
    super()
    
    this.state = {
      bars: [],
      beer: []
    }
  }
  
  componentWillMount() {
    this._fetchData();
  }
  
  _fetchData() {
    $.getJSON('src/data/bars.json', (bars) => {
      this.setState({ bars })
    });
    $.getJSON('src/data/beer.json', (beer) => {
      console.log('Got Beer')
      this.setState({ beer })
    });
  }
  
  _getBeer(beerList) {
    let minibeer = [];
    for (var i=0;i<beerList.length;i++) {
      let thisbeer = this.state.beer[beerList[i]-1];
      if (thisbeer) {
        minibeer.push(thisbeer);
      }
    }
    console.log(minibeer.length);
    if (minibeer.length === 0) {
      console.log('0 ret')
      return;
    } else {
      console.log('Returning Beer');
      return minibeer.map((beer) => {
        return (
          <Beer 
            name={beer.name}
            desc={beer.desc}
            key={beer.id} />
        );
      });
    }
  }
  
  _getBars() {
    return this.state.bars.map((bar) => {
      return (
        <Bar 
          name={bar.name}
          desc={bar.desc}
          key={bar.id}
          beer={this._getBeer(bar.beer)} />
      );
    });
  }
  
  render() {
    let bars = this._getBars();
    return (
      <div>
        <h1>BeerTab</h1>
        {bars}
      </div>
    );
  }
}

ReactDOM.render(<BeerApp />, document.getElementById('app'));
