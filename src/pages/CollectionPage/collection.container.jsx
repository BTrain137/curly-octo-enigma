// Is not used but if it was it would be imported in /pages/ShopPage
// it would replace the render render={} and replace it with component
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux"

import { selectIsCollectionsLoaded } from "../../redux/shop/shop.selector";
import WithSpinner from "../../components/WithSpinner";
import CollectionPage from "./index";

const mapStateToProps = createStructuredSelector({
  isLoading: state => !selectIsCollectionsLoaded(state)
});

// Explicit way without connect
// const CollectionContainer = connect(mapStateToProps)(WithSpinner(CollectionPage));

const CollectionPageContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionPage);

export default CollectionPageContainer;
