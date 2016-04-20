import React from 'react';

class Beer extends React.Component {
  _makeStarString(num) {
    let starString = '';
    for (var i=0;i<num;i++) {
      starString = starString.concat('⭐️');
    }
    return starString;
  }
  
  render() {
    return (
        <div className='beer'>
          <h3 className='beer-name'>{this.props.name}</h3>
          <div className='beer-desc'>
            <p>Their Review: {this._makeStarString(this.props.stars)} {this.props.desc}</p>
            <p>Our Review: {this._makeStarString(this.props.ourStars)} {this.props.review}</p>
          </div>
        </div>
    );
  }
}

// Export dependencies like this:
export default Beer;