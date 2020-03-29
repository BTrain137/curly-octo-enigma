import React, { Component } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import WithSpinner from "../../components/WithSpinner";

import CollectionOverview from "../../components/CollectionOverview";
import CollectionPage from "../CollectionPage";

import { updateCollection, fetchCollectionsStartAsync } from "../../redux/shop/shop.action";

import {
  firestore,
  convertCollectionsSnapshotToMap
} from "../../firebase/firebase.utils";

const CollectionsOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends Component {
  state = {
    loading: true
  };

  unsubscribeFromSnapShot = null;
  isFireBaseObserver = false;

  firebaseWithBuiltInObserver() {
    const { updateCollection } = this.props;
    const collectionRef = firestore.collection("collections");
    this.isFireBaseObserver = true;

    this.unsubscribeFromSnapShot = collectionRef.onSnapshot(async snapShot => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapShot);
      updateCollection(collectionsMap);
      this.setState({ loading: false });
    });
  }

  firebaseWithOutObserver() {
    const { updateCollection } = this.props;
    const collectionRef = firestore.collection("collections");

    collectionRef.get().then(async snapShot => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapShot);
      updateCollection(collectionsMap);
      this.setState({ loading: false });
    });
  }

  componentDidMount() {
    // this.firebaseWithBuiltInObserver();
    // this.firebaseWithOutObserver();
  }

  componentWillUnmount() {
    if (this.isFireBaseObserver) {
      this.unsubscribeFromSnapShot();
    }
  }

  render() {
    const { match } = this.props;
    const { loading } = this.state;
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          render={props => (
            <CollectionsOverviewWithSpinner isLoading={loading} {...props} />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={props => (
            <CollectionPageWithSpinner isLoading={loading} {...props} />
          )}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  updateCollection: collectionsMap => dispatch(updateCollection(collectionsMap)),
  fetchCollectionsStartAsync: fetchCollectionsStartAsync(dispatch),
});

export default connect(null, mapDispatchToProps)(ShopPage);
