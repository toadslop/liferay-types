export type AUI = {
  getAvailableLangPath: () => string;
  getCombine: () => boolean;
  getComboPath: () => string;
  getDateFormat: () => string;
  getEditorCKEditorPath: () => string;
  getFilter: () => string;
  getFilterConfig: () => object | null;
  getJavaScriptRootPath: () => string;
  getLangPath: () => string;
  getPortletRootPath: () => string;
  getStaticResourceURLParams: () => string;
};
