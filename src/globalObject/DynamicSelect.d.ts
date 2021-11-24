declare namespace Liferay {
  class DynamicSelect {
    constructor(e: Array<DynamicSelector>);
  }

  interface DynamicSelector {
    select: string;
    selectData: (callback: (t: DynamicSelector) => void) => void;
  }
}
