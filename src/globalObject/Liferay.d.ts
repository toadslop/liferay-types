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
import { Poller } from "./Poller";
import { Portal } from "./Portal";
import { Portlet } from "./Portlet";
import { Service, ServiceBatch, ServiceSingle } from "./Service";

export type Liferay = {
  AUI: AUI;
  Address: Address;
  Alert: (...args: unknown[]) => void; // TODO: fix this typedef
  BREAKPOINTS: { PHONE: number; TABLET: number };
  Browser: Browser;
  BrowserSelectors: BrowserSelectors;
  ControlMenu: {
    init: (containerId: string) => void;
  };
  DOMTaskRunner: DOMTaskRunner;
  Data: Data;
  Dependency: Dependency;
  EXPLAIN_RESOLUTIONS: boolean;
  EXPOSE_GLOBAL: boolean;
  Form: (...args: unknown[]) => void;
  Language: Language;
  LayoutExplorer: LayoutExplorer;
  Loader: object;
  LogoSelector: (...args: unknown) => void;
  Menu: (...args: unknown[]) => void;
  MenuFilter: (...args: unknown[]) => void;
  NavigationInteraction: (...args: unknown[]) => void;
  Notice: Notice;
  Notification: (...args: unknown[]) => void;
  Poller: Poller;
  Portal: Portal;
  Portlet: Portlet;
  Service: Service;
  fire: (type: string, data?: object, options?: object) => void;
  on: (
    type: string | Array | object | function,
    fn?: function,
    context?: object
  ) => void;
};
