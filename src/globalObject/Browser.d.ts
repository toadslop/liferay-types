export type Browser = {
  acceptsGzip: () => boolean;
  getMajorVersion: () => number;
  getRevision: () => string;
  getVersion: () => string;
  isAir: () => boolean;
  isChrome: () => boolean;
  isEdge: () => boolean;
  isFirefox: () => boolean;
  isGecko: () => boolean;
  isIe: () => boolean;
  isIphone: () => boolean;
  isLinux: () => boolean;
  isMac: () => boolean;
  isMobile: () => boolean;
  isMozilla: () => boolean;
  isOpera: () => boolean;
  isRtf: () => boolean;
  isSafari: () => boolean;
  isSun: () => boolean;
  isWebKit: () => boolean;
  isWindows: () => boolean;
};
