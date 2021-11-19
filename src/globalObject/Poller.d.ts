export type Poller = {
  addListener: (key: string, listener: Listener, scope: unknown) => void;
  cancelCustomDelay: () => void;
  getDelay: () => number;
  getReceiveUrl: () => string;
  getSendUrl: () => string;
  init: (options: InitPollerOptions) => void;
  isSupportsComet: () => boolean;
};

export type Listener = (event: Event) => void;
export type InitPollerOptions = {
  encryptedUserId: string;
  supportsComet: boolean;
};
