import { errorCallback, successCallback } from "../../api";

export type Service = (
  service: string | RequestObject<T> | RequestObject<T>[],
  data?: object | HTMLElement | string,
  successCallback?: successCallback,
  exceptionCallback?: errorCallback
) => void;

export type RequestObject<T> = {
  [key: string]: T | HTMLElement | string;
};
