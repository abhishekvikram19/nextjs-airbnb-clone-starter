import { ListingWhereUniqueInput } from "./ListingWhereUniqueInput";
import { ListingCreateNestedManyWithoutListingsInput } from "./ListingCreateNestedManyWithoutListingsInput";
import { InputJsonValue } from "../../types";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ListingCreateInput = {
  discription: string;
  listing?: ListingWhereUniqueInput | null;
  listingCreatedBy?: string | null;
  listings?: ListingCreateNestedManyWithoutListingsInput;
  locationData: InputJsonValue;
  locationType: string;
  mapData?: InputJsonValue;
  photos: InputJsonValue;
  placeSpace?: InputJsonValue;
  placeType?: string | null;
  price?: number | null;
  title: string;
  trips?: string | null;
  user: UserWhereUniqueInput;
  wishlists?: string | null;
};
