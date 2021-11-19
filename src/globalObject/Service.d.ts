import { errorCallback, successCallback } from "../../api";

export type Service = (
  service: string,
  data?: object | HTMLElement | string,
  successCallback?: successCallback,
  exceptionCallback?: errorCallback
) => void;
export type Service = (
  service: BatchRequest,
  successCallback: successCallback,
  exceptionCallback: errorCallback
) => void;

export type BatchRequest = {
  [props: string]: object;
};
