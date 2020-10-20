import React, { Component } from "react";

import SHOP_DATA from "./shopData";
import PreviewCollection from "../../components/preview-collection/preview-collection";

class ShopPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collection: SHOP_DATA,
    };
  }

  render() {
    return (
      <div className="shop-page">
        {this.state.collection.map(({ id, ...otherCollectionProps }) => {
          return <PreviewCollection key={id} {...otherCollectionProps} />;
        })}
      </div>
    );
  }
}

export default ShopPage;
