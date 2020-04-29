import React, { useContext } from "react";

import CollectionContext from '../../context/collections/collections.context'

import CollectionItem from "../../components/CollectionItem";

import "./CollectionPage.styles.scss";

const CollectionPage = ({ match }) => {
  const collections = useContext(CollectionContext);
  const collection = collections[match.params.collectionId];
  const { title, items } = collection;
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default CollectionPage;
