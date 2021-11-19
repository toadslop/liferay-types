import { Liferay } from "../globalObject/Liferay";

export type EventFacade<T> = {
  [props: number]: T;
  currentTarget: Liferay;
  details: [T];
  prevented: number;
  relatedTarget: object | undefined;
  stopped: number;
  target: Liferay;
  type: string;
};
