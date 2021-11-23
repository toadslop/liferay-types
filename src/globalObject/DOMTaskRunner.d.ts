export type DOMTaskRunner = {
  addTask: (action: DOMTaskAction) => void;
  addTaskState: (state: DOMTaskState) => void;
  reset: () => void;
  runTask: (node: HTMLElement) => void;
};

declare namespace DOMTaskRunner {
  type DOMTaskAction = {
    action: (state: object, params: object, node: HTMLElement) => void;
    condition: (state: object, params: object, node: HTMLElement) => boolean;
    params: object;
  };

  type DOMTaskState = {
    data: object;
    owner: string;
  };
}
