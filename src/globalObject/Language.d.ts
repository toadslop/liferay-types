declare namespace Liferay {
  namespace Language {
    const available: {
      [index: string]: string;
    };
    const direction: {
      [index: string]: string;
    };
    function get(key: string): string;
  }
}
