import React from 'react';

class Bar extends React.Component {
  
  
  
  render() {
    
    let beer = this._getBeer();
    
    return (
      <div>
          <h4>{this.props.name}</h4>
          <p>{this.props.body}</p>
          <div>{beer}</div>
      </div>
    );
  }
}

// Export dependencies like this:
export default Bar;