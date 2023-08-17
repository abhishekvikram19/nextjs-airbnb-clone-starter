import { ListingWhereUniqueInput } from "./ListingWhereUniqueInput";
import { ListingUpdateManyWithoutListingsInput } from "./ListingUpdateManyWithoutListingsInput";
import { InputJsonValue } from "../../types";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ListingUpdateInput = {
  discription?: string;
  listing?: ListingWhereUniqueInput | null;
  listingCreatedBy?: string | null;
  listings?: ListingUpdateManyWithoutListingsInput;
  locationData?: InputJsonValue;
  locationType?: string;
  mapData?: InputJsonValue;
  photos?: InputJsonValue;
  placeSpace?: InputJsonValue;
  placeType?: string | null;
  price?: number | null;
  title?: string;
  trips?: string | null;
  user?: UserWhereUniqueInput;
  wishlists?: string | null;
};
