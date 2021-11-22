export type Portlet = {
  add: (options: PortletAddOptions) => void;
  addHTML: (options: PortletAddHTMLOptions) => void;
  close: (
    portlet: Portlet | HTMLElement,
    skipConfirm: boolean,
    options: object
  ) => void;
  destroy: (portlet: Portlet | HTMLElement, options?: object) => void;
  destroyComponents: (portletId: string) => void;
  isStatic: (portletId: string) => boolean;
  list: string[];
  minimize: (portlet: Portlet, el: unknown, options: MinimizeOptions) => void;
  onLoad: (options: LoadOptions) => void;
  openWindow: (options: OpenWindowOptions) => void;
};

export interface BasicOptions {
  doAsUserId?: string;
  plid?: string;
}

export interface AddOptions extends BasicOptions {
  portletData: object;
  portletId: string;
  portletItemId: string;
  placeholder?: HTMLElement;
}

export interface MinimizeOptions extends BasicOptions {}

export interface AddHTMLOptions {
  beforePortletLoaded: (placeholder: HTMLElement) => void;
  data?: AddHTMLOptionsData;
  onComplete: (portletBoundary: HTMLElement, portletId: string) => void;
  placeholder: HTMLElement;
  url: string;
}

export interface HTMLOptionsData {
  dataType?: string;
  preventNotification?: boolean;
}

export interface Portlet {
  [keys: string | number | symbol]: unknown;
  portletId: string;
  portletProcessed: boolean;
  columnPos: string | number;
  isStatic: boolean;
  refreshURL: string;
  refreshURLData: object;
  on: (events: string | string[], fn: function) => void;
  one: (className: string) => void;
}

export interface LoadOptions {
  canEditTitle: boolean;
  columnPos: string | number;
  isStatic: "no" | boolean;
  namespaceId: string;
  porletId: string;
  refreshURL: string;
  refreshURLData: object;
}

export interface OpenWindowOptions {
  bodyCssClass: string;
  destroyOnHide: boolean;
  namespace: string;
  portlet?: string | Portlet;
  subTitle: string;
  title: string;
  uri?: string;
}
