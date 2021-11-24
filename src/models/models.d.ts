declare namespace Liferay {
  type Country = {
    a2: string;
    a3: string;
    active: boolean;
    countryId: string;
    idd: string;
    mvccVersion: string;
    name: string;
    nameCurrentValue: string;
    number: string;
    zipRequired: boolean;
  };

  type Region = {
    active: boolean;
    countryId: string;
    name: string;
    regionCode: string;
    regionId: string;
  };
}
