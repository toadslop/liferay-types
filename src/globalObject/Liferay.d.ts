import { Address } from "./Address";
import { AUI } from "./AUI";
import { Browser } from "./Browser";
import { BrowserSelectors } from "./BrowserSelectors";
import { Data } from "./Data";
import { Dependency } from "./Dependency";
import { DOMTaskRunner } from "./DOMTaskRunner";
import { Language } from "./Language";
import { LayoutExplorer } from "./LayoutExporter";

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
  LayoutExplorer: LayoutExplorer;
};
