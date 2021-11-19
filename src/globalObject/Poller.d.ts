export type Poller = {
  addListener: (key: string, listener: listener, scope: unknown) => void;
  cancelCustomDelay: () => void;
  getDelay: () => number;
  getReceiveUrl: () => string;
  getSendUrl: () => string;
  init: (options: InitPollerOptions) => void;
  isSupportsComet: () => boolean;
};

export type listener = (event: Event) => void;
export type InitPollerOptions = {
  encryptedUserId: string;
  supportsComet: boolean;
};
