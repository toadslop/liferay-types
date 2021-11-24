// import { errorCallback, successCallback } from "../api";

declare namespace Liferay {
  function Service(
    requestObject: RequestObject<T>,
    successCallback: ServicsSuccessCallback,
    exceptionCallback: ServiceExceptionCallback
  );
  function Service(
    requestObject: RequestObject<T>[],
    successCallback: ServicsSuccessCallback,
    exceptionCallback: ServiceExceptionCallback
  );
  function Service(
    service: string,
    formElement: HTMLElement,
    successCallback: ServicsSuccessCallback<T>,
    exceptionCallback: ServiceExceptionCallback
  ): void;
  function Service(
    service: string,
    formId: string,
    successCallback: ServicsSuccessCallback<T>,
    exceptionCallback: ServiceExceptionCallback
  ): void;
  function Service(
    service: string,
    requestData: object,
    successCallback: ServicsSuccessCallback<T>,
    exceptionCallback: ServiceExceptionCallback
  ): void;

  type ServicsSuccessCallback<T> = (response: T[]) => void;
  type ServiceExceptionCallback = (error: string) => void;
  type RequestObject<T extends object> = {
    [endpoint: string]: T | HTMLElement | string;
  };
}
