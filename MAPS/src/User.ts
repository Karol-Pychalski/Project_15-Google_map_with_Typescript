//na podstawie wideo 369, 370, 317

import faker from 'faker';
import { Mappable } from './CustomMap';

//klasa User ma waściwość będącą obiektem z dwoma innymi właściwościami
//export objaśniony w wiedo 372
//implements dodane w wiedo 388
export class User implements Mappable {
  name: string;
  location: {
    lat: number;
    lng: number;
  };

  color: string = 'red'; //dodane w wideo 388

  //wideo 371 (wyjaśnienie budowy):
  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }

  markerContent(): string {
    return `User Name: ${this.name}`;
  }
}
