export type Provider<T> = {
  EVENT_HIDDEN: string;
  EVENT_HIDE: string;
  EVENT_SHOW: string;
  EVENT_SHOWN: string;
  hide: (elements: T) => void;
  show: (elements: T) => void;
};

export type CollapseProvider = Provider<Provider.CollapseElements>;
export type DropdownProvider = Provider<Provider.DropdownElements>;

declare namespace Provider {
  interface ProviderElements {
    trigger: HTMLElement;
  }
  interface CollapseElements extends ProviderElements {
    panel: HTMLElement;
  }

  interface DropdownElements extends ProviderElements {
    menu: HTMLElement;
  }
}
