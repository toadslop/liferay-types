import { Address } from "./globalObject/Address";
import { AUI } from "./globalObject/AUI";
import { Browser } from "./globalObject/Browser";
import { BrowserSelectors } from "./globalObject/BrowserSelectors";
import { Data } from "./globalObject/Data";
import { Dependency } from "./globalObject/Dependency";
import { DOMTaskRunner } from "./globalObject/DOMTaskRunner";
import { Language } from "./globalObject/Language";

export type Liferay = {
  AUI: AUI;
  Address: Address;
  Alert: (...args: unknown[]) => unknown; // TODO: fix this typedef
  BREAKPOINTS: { PHONE: number; TABLET: number };
  Browser: Browser;
  BrowserSelectors: BrowserSelectors;
  DOMTaskRunner: DOMTaskRunner;
  Data: Data;
  Dependency: Dependency;
  EXPLAIN_RESOLUTIONS: boolean;
  EXPOSE_GLOBAL: boolean;
  Form: () => void;
  Language: Language;
};

declare global {
  const Liferay: Liferay;
}
