export type AUI = {
  getCombine: () => boolean;
  getComboPath: () => string;
  getDateFormat: () => string;
  getEditorCKEditorPath: () => string;
  getFilter: () => string;
  getFilterConfig: () => object | null;
  getJavaScriptRootPath: () => string;
  getPortletRootPath: () => string;
  getStaticResourceURLParams: () => string;
};
