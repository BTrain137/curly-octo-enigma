import React, { Component } from "react";
import { Route } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

import WithSpinner from "../../components/WithSpinner";
import { selectIsCollectionsLoaded } from "../../redux/shop/shop.selector";

import CollectionOverviewContainer from "../../components/CollectionOverview/CollectionOverview.container";
import CollectionPage from "../CollectionPage";

// import CollectionContainer from "../CollectionPage/collection.container";

import { fetchCollectionStart } from "../../redux/shop/shop.action";

const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends Component {
  componentDidMount() {
    const { fetchCollectionStart } = this.props;
    fetchCollectionStart();
  }

  render() {
    const { match, isCollectionsLoaded } = this.props;

    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          // This route moved the isLoading that is taken from redux
          // And moved it into a HOC with the container
          component={CollectionOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          // This route left the isLoading still attached to compare the difference
          render={(props) => (
            <CollectionPageWithSpinner
              isLoading={!isCollectionsLoaded}
              {...props}
            />
          )}
          // component={CollectionContainer}
        />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  isCollectionsLoaded: selectIsCollectionsLoaded,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionStart: () => dispatch(fetchCollectionStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
