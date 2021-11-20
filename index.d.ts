import { Liferay } from "./src/globalObject/Liferay";

declare namespace Liferay {
  declare global {
    export const Liferay: Liferay;
  }

  export type BatchRequest = import("./src/globalObject/Service").BatchRequest;
  export type EventFacade = import("./src/events/EventFacade").EventFacade;
  export type DOMTaskAction =
    import("./src/globalObject/DOMTaskRunner").DOMTaskAction;
  export type DOMTaskState =
    import("./src/globalObject/DOMTaskRunner").DOMTaskState;
  export type LayoutOptions =
    import("./src/globalObject/LayoutExporter").LayoutOptions;
  export type DetailsOptions =
    import("./src/globalObject/LayoutExporter").DetailsOptions;
  export type ProposeLayoutOptions =
    import("./src/globalObject/LayoutExporter").ProposeLayoutOptions;
  export type Reviewer = import("./src/globalObject/LayoutExporter").Reviewer;
  export type PublishToLiveOptions =
    import("./src/globalObject/LayoutExporter").PublishToLiveOptions;
  export type LayloutExplorerPane =
    import("./src/globalObject/LayoutExporter").LayloutExplorerPane;
  export type NoticeOptions = import("./src/globalObject/Notice").NoticeOptions;
  export type AnimationConfig =
    import("./src/globalObject/Notice").AnimationConfig;
  export type Listener = import("./src/globalObject/Poller").Listener;
  export type InitPollerOptions =
    import("./src/globalObject/Poller").InitPollerOptions;
}
