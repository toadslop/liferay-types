import { successCallback } from "../api";
import { Country, Region } from "../models/models";

export type Address = {
  getCountries: (callback: successCallback<Country>) => void;
  getRegions: (callback: successCallback<Region>, selectKey: string) => void;
};
