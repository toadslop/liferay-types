import { Liferay } from "./src/globalObject/Liferay";
import * as Service from "./src/globalObject/Service";

declare global {
  export const Liferay: Liferay;
}

export const Service = Service;
