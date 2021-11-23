export class DynamicSelect {
  constructor(e: Array<DynamicSelector>);
}

declare namespace DynamicSelect {
  interface DynamicSelector {
    select: string;
    selectData: (callback: (t: DynamicSelector) => void) => void;
  }
}
