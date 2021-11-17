export type Dependency = {
  provide: (
    obj: object,
    methodName: string,
    methodFn: function,
    proto: object
  ) => void;
};
