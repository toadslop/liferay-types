export type LayoutExplorer = {
  all: (options: LayoutOptions) => void;
  details: (options: object) => void;
  icons: {
    minus: string;
    plus: string;
  };
  proposeLayout: (options: ProposeLayoutOptions) => void;
  publishToLive: (options: PublishToLiveOptions) => void;
  selected: (options: LayoutOptions) => void;
};

declare namespace LayoutExplorer {
  export interface LayoutOptions {
    // TODO: find complete typedef for AllOptions
    obj: {
      checked: boolean;
    };
    pane: LayloutExplorerPane;
  }

  export interface DetailsOptions {
    detail: LayloutExplorerPane;
    toggle: unknown; // TODO find proper type for toggle
  }

  export interface ProposeLayoutOptions {
    namespace: string;
    reviewers: Reviewer[];
    url: string;
  }

  export interface Reviewer {
    userId: string | number;
    fullname: string;
  }

  export interface PublishToLiveOptions {
    title: string;
    url: string;
  }

  export interface LayloutExplorerPane {
    hasClass: (className: string) => boolean;
    show: () => void;
    hide: () => void;
  }
}
