import { errorCallback, successCallback } from "../../api";

export type Service = (
  service: string | BatchRequest,
  data?: object | HTMLElement | string,
  successCallback?: successCallback,
  exceptionCallback?: errorCallback
) => void;

export type BatchRequest = {
  [props: string]: object;
};
