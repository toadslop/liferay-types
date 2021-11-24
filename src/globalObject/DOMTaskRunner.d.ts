declare namespace Liferay {
  namespace DOMTaskRunner {
    function addTask(action: DOMTaskAction): void;
    function addTaskState(state: DOMTaskState): void;
    function reset(): void;
    function runTask(node: HTMLElement): void;

    interface DOMTaskAction {
      action: (state: object, params: object, node: HTMLElement) => void;
      condition: (state: object, params: object, node: HTMLElement) => boolean;
      params: object;
    }

    interface DOMTaskState {
      data: object;
      owner: string;
    }
  }
}
