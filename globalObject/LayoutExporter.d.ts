export type LayoutExplorer = {
  all: (options: AllOptions) => void;
  details: (options: object) => void;
};

export type AllOptions = {
  // TODO: find complete typedef for AllOptions
  obj: {
    checked: boolean;
  } & {
    [prop: string]: unknown;
  };
  pane: {
    hide: () => void;
  } & {
    [prop: string]: unknown;
  };
};

export type DetailsOptions = {
  detail: {
    hasClass: (className: string) => boolean;
    show: () => void;
    hide: () => void;
  };
  toggle: unknown; // TODO find proper type for toggle
};
