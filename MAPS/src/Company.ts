//wiedo 373:

import faker from 'faker';
import { Mappable } from './CustomMap';

export class Company implements Mappable {
  companyName: string; //tu mogłoby też być 'name' zamiast companyName, ale mogłoby się mieszać z name z User
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };

  color: string = 'green';

  constructor() {
    this.companyName = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }

  //wideo 387:
  //metoda markerContent będzie wyszukiwana przez TS, dlatego musi nazywać się tak samo jak ta w interface w CustomMap.ts
  //w return można wpisać, że ma być zwracany np string 'hgjgjghjhg' i TS go zwróci w tej postaci, ponieważ dla takiej konstrukcji markerContent TS poszukuje wyłącznie typów string
  markerContent(): string {
    return `
    <div>
      <h1>Company Name: ${this.companyName}</h1>
      <h3>Catchphrase: ${this.catchPhrase}</h3>
    </div>
    `;
  }
}
