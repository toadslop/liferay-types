// Type definitions for the Liferay global object in Liferay DXP 7.4-GA1
// Project: Liferay-Types
// Definitions by: Toadslop <https://github.com/toadslop>

declare namespace Liferay {
  const BREAKPOINTS: { PHONE: number; TABLET: number };
  const Form: (...args: unknown[]) => void;
  const Menu: () => void;
}

// declare namespace LayoutExporter {
//   interface LayoutOptions {
//     // TODO: find complete typedef for AllOptions
//     obj: {
//       checked: boolean;
//     };
//     pane: LayloutExplorerPane;
//   }

//   interface DetailsOptions {
//     detail: LayloutExplorerPane;
//     toggle: unknown; // TODO find proper type for toggle
//   }

//   interface ProposeLayoutOptions {
//     namespace: string;
//     reviewers: Reviewer[];
//     url: string;
//   }

//   interface Reviewer {
//     userId: string | number;
//     fullname: string;
//   }

//   interface PublishToLiveOptions {
//     title: string;
//     url: string;
//   }

//   interface LayloutExplorerPane {
//     hasClass: (className: string) => boolean;
//     show: () => void;
//     hide: () => void;
//   }
// }
