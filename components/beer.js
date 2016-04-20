import React from 'react';

class Beer extends React.Component {
  render() {
    return (
        <div>
          <h4>{this.props.name}</h4>
          <p>{this.props.desc}</p>
        </div>
    );
  }
}

// Export dependencies like this:
export default Beer;