declare namespace Liferay {
  namespace LayoutExporter {
    function all(options: LayoutOptions): void;
    function details(options: object): void; // TODO: determine proper options for this function.
    const icons: {
      minus: string;
      plus: string;
    };
    function proposeLayout(options: ProposeLayoutOptions): void;
    function publishToLive(options: PublishToLiveOptions): void;
    function selected(options: LayoutOptions): void;

    interface LayoutOptions {
      // TODO: find complete typedef for AllOptions
      obj: {
        checked: boolean;
      };
      pane: LayloutExplorerPane;
    }

    interface DetailsOptions {
      detail: LayloutExplorerPane;
      toggle: unknown; // TODO find proper type for toggle
    }

    interface ProposeLayoutOptions {
      namespace: string;
      reviewers: Reviewer[];
      url: string;
    }

    interface Reviewer {
      userId: string | number;
      fullname: string;
    }

    interface PublishToLiveOptions {
      title: string;
      url: string;
    }

    interface LayloutExplorerPane {
      hasClass: (className: string) => boolean;
      show: () => void;
      hide: () => void;
    }
  }
}
