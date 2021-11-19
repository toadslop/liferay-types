export type Language = {
  available: {
    [index: string]: string;
  };
  direction: {
    [index: string]: string;
  };
  get: (key: string) => string;
};
