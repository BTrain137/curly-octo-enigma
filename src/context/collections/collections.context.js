import { createContext } from "react";

import SHOP_DATA from "./collection.data.json";

const CollectionContext = createContext(SHOP_DATA);

export default CollectionContext;
