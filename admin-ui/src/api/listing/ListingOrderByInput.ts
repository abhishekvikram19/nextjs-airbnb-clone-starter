import { SortOrder } from "../../util/SortOrder";

export type ListingOrderByInput = {
  createdAt?: SortOrder;
  discription?: SortOrder;
  id?: SortOrder;
  listingId?: SortOrder;
  listingCreatedBy?: SortOrder;
  locationData?: SortOrder;
  locationType?: SortOrder;
  mapData?: SortOrder;
  photos?: SortOrder;
  placeSpace?: SortOrder;
  placeType?: SortOrder;
  price?: SortOrder;
  title?: SortOrder;
  trips?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
  wishlists?: SortOrder;
};
