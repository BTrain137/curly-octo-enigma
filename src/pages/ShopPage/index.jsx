import React, { Component } from 'react'
import SHOP_DATA from "./collection.json";

class ShopPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      collection: SHOP_DATA
    }
  }

  render(){
    return (
      <>
      {console.log(SHOP_DATA)}
      </>
    )
  }
}

export default ShopPage;
