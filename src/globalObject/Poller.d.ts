// export type Poller = {
//   addListener: (key: string, listener: Listener, scope: unknown) => void;
//   cancelCustomDelay: () => void;
//   getDelay: () => number;
//   getReceiveUrl: () => string;
//   getSendUrl: () => string;
//   init: (options: InitPollerOptions) => void;
//   isSupportsComet: () => boolean;
//   processResponse: (id: string, obj: ResponseObject) => void;
//   removeListener: (key: string) => void;
//   resume: () => void;
//   setCustomDelay: (delay: number) => void;
//   setDelay: (delay: number) => void;
//   setEncryptedUserId: (encryptedUserId: string | number) => void;
//   setSupportsComet: (supportsComet: boolean) => void;
//   setUrl: (url: string) => void;
//   submitRequest: (key: string, data: object, chunkId: string) => void;
//   suspend: () => void;
//   url: string;
// };

// export type Listener = (event: Event) => void;
// export type InitPollerOptions = {
//   encryptedUserId: string;
//   supportsComet: boolean;
// };
// export interface ResponseObject {
//   responseText: string;
// }
