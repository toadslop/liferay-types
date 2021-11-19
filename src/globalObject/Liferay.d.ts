import { Address } from "./Address";
import { AUI } from "./AUI";
import { Browser } from "./Browser";
import { BrowserSelectors } from "./BrowserSelectors";
import { Data } from "./Data";
import { Dependency } from "./Dependency";
import { DOMTaskRunner } from "./DOMTaskRunner";
import { Language } from "./Language";
import { LayoutExplorer } from "./LayoutExporter";
import { Notice } from "./Notice";
import { Service } from "./Service";

export type Liferay = {
  AUI: AUI;
  Address: Address;
  Alert: (...args: unknown[]) => void; // TODO: fix this typedef
  BREAKPOINTS: { PHONE: number; TABLET: number };
  Browser: Browser;
  BrowserSelectors: BrowserSelectors;
  DOMTaskRunner: DOMTaskRunner;
  Data: Data;
  Dependency: Dependency;
  EXPLAIN_RESOLUTIONS: boolean;
  EXPOSE_GLOBAL: boolean;
  Form: (...args: unknown[]) => void;
  Language: Language;
  LayoutExplorer: LayoutExplorer;
  Loader: object;
  Menu: (...args: unknown[]) => void;
  NavigationInteraction: (...args: unknown[]) => void;
  Notice: Notice;
  Notification: (...args: unknown[]) => void;
  Service: Service;
};
