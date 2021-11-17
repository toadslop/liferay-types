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

export type LayoutOptions = {
  // TODO: find complete typedef for AllOptions
  obj: {
    checked: boolean;
  };
  pane: Pane;
};

export type DetailsOptions = {
  detail: Pane;
  toggle: unknown; // TODO find proper type for toggle
};

export type ProposeLayoutOptions = {
  namespace: string;
  reviewers: Reviewer[];
  url: string;
};

export type Reviewer = {
  userId: string | number;
  fullname: string;
};

export type PublishToLiveOptions = {
  title: string;
  url: string;
};

export type Pane = {
  hasClass: (className: string) => boolean;
  show: () => void;
  hide: () => void;
};
