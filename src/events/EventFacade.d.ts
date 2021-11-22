import { Liferay } from "../globalObject/Liferay";

export type EventFacade<T> = {
  [key: string]: any;
  currentTarget: Liferay;
  details: T;
  prevented: number;
  relatedTarget: object | undefined;
  stopped: number;
  target: Liferay;
  type: string;
};
