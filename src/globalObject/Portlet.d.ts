declare namespace Liferay {
  namespace Portlet {
    function add(options: AddOptions): void;
    function addHTML(options: AddHTMLOptions): void;
    function close(
      portlet: Portlet | HTMLElement,
      skipConfirm: boolean,
      options: object
    ): void;
    function destroy(portlet: Portlet | HTMLElement, options?: object): void;
    function destroyComponents(portletId: string): void;
    function isStatic(portletId: string): boolean;
    const list: string[];
    function minimize(
      portlet: Portlet,
      el: unknown,
      options: MinimizeOptions
    ): void;
    function onLoad(options: LoadOptions): void;
    function openWindow(options: OpenWindowOptions): void;

    interface BasicOptions {
      doAsUserId?: string;
      plid?: string;
      beforePortletLoaded: (placeholder: HTMLElement) => void;
      onComplete: (portletBoundary: HTMLElement, portletId: string) => void;
    }

    interface AddOptions extends BasicOptions {
      portletData: object;
      portletId: string;
      portletItemId: string;
      placeholder?: HTMLElement;
    }

    interface MinimizeOptions extends BasicOptions {}

    interface AddHTMLOptions {
      data?: AddHTMLOptionsData;
      placeholder: HTMLElement;
      url: string;
    }

    interface HTMLOptionsData {
      dataType?: string;
      preventNotification?: boolean;
    }

    interface Portlet {
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

    interface LoadOptions {
      canEditTitle: boolean;
      columnPos: string | number;
      isStatic: "no" | boolean;
      namespaceId: string;
      porletId: string;
      refreshURL: string;
      refreshURLData: object;
    }

    interface OpenWindowOptions {
      bodyCssClass: string;
      destroyOnHide: boolean;
      namespace: string;
      portlet?: string | Portlet;
      subTitle: string;
      title: string;
      uri?: string;
    }
  }
}
