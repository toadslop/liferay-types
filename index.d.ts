// Type definitions for Liferay global object in Liferay's DXP version 7.4-GA1.
// Project: Lifery-Types
// Definitions by: Toadslop <https://github.com/toadslop>
import { Address } from "./src/globalObject/Address";
import { AUI } from "./src/globalObject/AUI";
import { Browser } from "./src/globalObject/Browser";
import { Data } from "./src/globalObject/Data";
import { Dependency } from "./src/globalObject/Dependency";
import { DOMTaskRunner } from "./src/globalObject/DOMTaskRunner";
import { DynamicSelect } from "./src/globalObject/DynamicSelect";
import { Language } from "./src/globalObject/Language";
import {
  CollapseProvider,
  DropdownProvider,
} from "./src/globalObject/Providers";

declare namespace Liferay {
  const AUI: AUI;
  const Address: Address;
  const BREAKPOINTS: { PHONE: number; TABLET: number };
  const Browser: Browser;
  const CollapseProvider: CollapseProvider;
  const DOMTaskRunner: DOMTaskRunner;
  const Data: Data;
  const Dependency: Dependency;
  const DropdownProvider: DropdownProvider;
  const DynamicSelect: DynamicSelect;
  const Form: (...args: unknown[]) => void;
  const Language: Language;
  const Loader: object;
  const Menu: () => void;
}

// import { Liferay } from "./src/globalObject/Liferay";

// declare global {
//   export const Liferay: Liferay;
// }

// declare namespace Liferay {
//   export type RequestObject =
//     import("./src/globalObject/Service").RequestObject;
//   export type EventFacade = import("./src/events/EventFacade").EventFacade;
//   export type DOMTaskAction =
//     import("./src/globalObject/DOMTaskRunner").DOMTaskAction;
//   export type DOMTaskState =
//     import("./src/globalObject/DOMTaskRunner").DOMTaskState;
//   export type LayoutOptions =
//     import("./src/globalObject/LayoutExporter").LayoutOptions;
//   export type DetailsOptions =
//     import("./src/globalObject/LayoutExporter").DetailsOptions;
//   export type ProposeLayoutOptions =
//     import("./src/globalObject/LayoutExporter").ProposeLayoutOptions;
//   export type Reviewer = import("./src/globalObject/LayoutExporter").Reviewer;
//   export type PublishToLiveOptions =
//     import("./src/globalObject/LayoutExporter").PublishToLiveOptions;
//   export type LayloutExplorerPane =
//     import("./src/globalObject/LayoutExporter").LayloutExplorerPane;
//   export type NoticeOptions = import("./src/globalObject/Notice").NoticeOptions;
//   export type AnimationConfig =
//     import("./src/globalObject/Notice").AnimationConfig;
//   export type Listener = import("./src/globalObject/Poller").Listener;
//   export type InitPollerOptions =
//     import("./src/globalObject/Poller").InitPollerOptions;
// }
