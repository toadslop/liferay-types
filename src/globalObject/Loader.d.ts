declare namespace Liferay {
  namespace Loader {
    function define(...args: unknown): void; // TODO: fix this typedef
    function require(
      components: string[],
      successCallback: (Plugin: Plugin) => void,
      errorCallback: (error: Error) => void
    ): void;

    function version(): string;

    interface Plugin {
      default: unknown;
    }
  }
}
