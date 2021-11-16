export type Language = {
  available: {
    [index: string]: string;
  };
  direction: {
    [index: string]: string;
  };
  get: (...args: string[]) => string;
};
