import React from 'react';

class Bar extends React.Component {
  
  render() {
    
    let beer = this.props.beer;
    //
    return (
      <div className='bar'>
          <h2 className='bar-name'>{this.props.name}</h2>
          <p className='bar-desc'>{this.props.desc}</p>
          <div className='bar-beer-list'>{beer}</div>
      </div>
    );
  }
}

// Export dependencies like this:
export default Bar;