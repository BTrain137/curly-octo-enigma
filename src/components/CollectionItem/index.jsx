import React from "react";

import CustomButton from "../CustomButton";

import "./CollectionItem.styles.scss";

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  return (
  <div className="collection-item">
    <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
    <div className="collection-footer">
      <span className="name">{name}</span>
      <span className="price">{price}</span>
    </div>
    <CustomButton inverted onClick={() => addItem(item)}>
      Add to cart
    </CustomButton>
  </div>
)};

export default CollectionItem;
