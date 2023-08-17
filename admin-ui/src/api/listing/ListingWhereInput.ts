import { StringFilter } from "../../util/StringFilter";
import { ListingWhereUniqueInput } from "./ListingWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ListingListRelationFilter } from "./ListingListRelationFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ListingWhereInput = {
  discription?: StringFilter;
  id?: StringFilter;
  listing?: ListingWhereUniqueInput;
  listingCreatedBy?: StringNullableFilter;
  listings?: ListingListRelationFilter;
  locationData?: JsonFilter;
  locationType?: StringFilter;
  mapData?: JsonFilter;
  photos?: JsonFilter;
  placeSpace?: JsonFilter;
  placeType?: StringNullableFilter;
  price?: IntNullableFilter;
  title?: StringFilter;
  trips?: StringNullableFilter;
  user?: UserWhereUniqueInput;
  wishlists?: StringNullableFilter;
};
