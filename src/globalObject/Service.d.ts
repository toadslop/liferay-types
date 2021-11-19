import { errorCallback, successCallback } from "../../api";

type Service = (
  service: string,
  data?: object | HTMLElement | string,
  successCallback?: successCallback,
  exceptionCallback?: errorCallback
) => void;
type Service = (
  service: BatchRequest,
  successCallback: successCallback,
  exceptionCallback: errorCallback
) => void;

export type BatchRequest = {
  [props: string]: object;
};
