import React, { Component } from 'react';
import data from '../data/data.json';

class Cards extends Component {
  state = {
    data
  };

  //   componentDidMount() {
  //     fetch(
  //       'https://gdl002-burger-queen-backend.jessgatma.now.sh/products/breakfast'
  //     )
  //       .then(res => res.json())
  //       .then(products => {
  //         this.setState({ products: products.products }, () =>
  //           console.log('Products fetched', products)
  //         );
  //       });
  //   }

  render() {
    const { data } = this.state;
    return (
      <div>
        {console.log(data)}
        {data.restaurants.map((item, index) =>
          console.log(item.name, item.image)
        )}
      </div>
    );
  }
}

export default Cards;
