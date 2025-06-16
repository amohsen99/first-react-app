
import React from 'react';

class Product extends React.Component {
    render() {
      return (
        <div>
          <h1>{this.props.name}</h1>
          <p>{this.props.price}</p>
        </div>
      );
    }
  }
  
  export default Product;