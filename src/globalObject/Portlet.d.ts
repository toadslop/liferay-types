export type Portlet = {
  add: (options: PortletAddOptions) => void;
  addHTML: (options: PortletAddHTMLOptions) => void;
  close: (
    portlet: Portlet | HTMLElement,
    skipConfirm: boolean,
    options: object
  ) => void;
  destroy: (portlet: Portlet | HTMLElement, options: object) => void;
  destroyComponents: (portletId: string) => void;
  isStatic: (portletId: string) => boolean;
  list: string[];
};

export type AddOptions = {
  doAsUserId?: string;
  plid?: string;
  portletData: object;
  portletId: string;
  portletItemId: string;
  placeholder?: HTMLElement;
};

export type AddHTMLOptions = {
  beforePortletLoaded: (placeholder: HTMLElement) => void;
  data?: AddHTMLOptionsData;
  onComplete: (portletBoundary: HTMLElement, portletId: string) => void;
  placeholder: HTMLElement;
  url: string;
};

export interface HTMLOptionsData {
  dataType?: string;
  preventNotification?: boolean;
}

export interface Portlet {
  [keys: string | number | symbol]: unknown;
  portletId: string;
}

function (portlet, el, options) {
        var instance = this;
        options = options || {};
    var doAsUserId = options.doAsUserId || themeDisplay.getDoAsUserIdEncoded();
    var plid = options.plid || themeDisplay.getPlid();
    portlet = A.one(portlet);

    if (portlet) {
          var content = portlet.one('.portlet-content-container');

      if (content) {
            var restore = content.hasClass('hide');
        content.toggle();
        portlet.toggleClass('portlet-minimized');
        var link = A.one(el);

        if (link) {
              var title = restore ? 'Minimize' : 'Restore';
          link.attr('alt', title);
          link.attr('title', title);
          var linkText = link.one('.taglib-text-icon');

          if (linkText) {
                linkText.html(title);
          }

          var icon = link.one('i');

          if (icon) {
                icon.removeClass('icon-minus icon-resize-vertical');

            if (restore) {
                  icon.addClass('icon-minus');
            } else {
                  icon.addClass('icon-resize-vertical');
            }
          }
        }

        A.io.request(themeDisplay.getPathMain() + '/portal/update_layout', {
              after: {
                success: function success() {
                  if (restore) {
                    var data = {
                      doAsUserId: doAsUserId,
                      p_l_id: plid,
                      p_p_boundary: false,
                      p_p_id: portlet.portletId,
                      p_p_isolated: true
                };
                portlet.plug(A.Plugin.ParseContent);
                portlet.load(themeDisplay.getPathMain() + '/portal/render_portlet?' + A.QueryString.stringify(data));
              }
            }
          },
          data: {
                cmd: 'minimize',
            doAsUserId: doAsUserId,
            p_auth: Liferay.authToken,
            p_l_id: plid,
            p_p_id: portlet.portletId,
            p_p_restore: restore,
            p_v_l_s_g_id: themeDisplay.getSiteGroupId()
          }
        });
      }
    }
  }