import { Liferay } from "./src/globalObject/Liferay";

declare global {
  export const Liferay: Liferay;
}

declare namespace LiferayTypes {
  export type BatchRequest = import("./src/globalObject/Service").BatchRequest;
  export type EventFacade = import("./src/events/eventFacade").EventFacade;
}
