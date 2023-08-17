import { JsonValue } from "type-fest";
import { User } from "../user/User";

export type Listing = {
  createdAt: Date;
  discription: string;
  id: string;
  listing?: Listing | null;
  listingCreatedBy: string | null;
  listings?: Array<Listing>;
  locationData: JsonValue;
  locationType: string;
  mapData: JsonValue;
  photos: JsonValue;
  placeSpace: JsonValue;
  placeType: string | null;
  price: number | null;
  title: string;
  trips: string | null;
  updatedAt: Date;
  user?: User;
  wishlists: string | null;
};
