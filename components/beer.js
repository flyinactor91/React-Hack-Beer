import React from 'react';

class Beer extends React.Component {
  render() {
    return (
        <div className='beer'>
          <h3 className='beer-name'>{this.props.name}</h3>
          <p className='beer-desc'>{this.props.desc}</p>
        </div>
    );
  }
}

// Export dependencies like this:
export default Beer;