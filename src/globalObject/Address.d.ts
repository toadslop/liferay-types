declare namespace Liferay {
  namespace Address {
    function getCountries(callback: ServiceCallback<Country>): void;
    function getRegions(
      callback: ServicsSuccessCallback<Region>,
      selectKey: string
    ): void;
  }
}
