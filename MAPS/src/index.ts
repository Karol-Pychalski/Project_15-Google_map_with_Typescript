import { User } from './User';
import { Company } from './Company';
import { CustomMap } from './CustomMap';

const user = new User();
const company = new Company();
const customMap = new CustomMap('map');

customMap.addMarker(user);
customMap.addMarker(company);

//wideo 378:
//budowanie instancji (poprzez użycie new)
new google.maps.Map(document.getElementById('map'), {
  zoom: 1,
  center: {
    lat: 0,
    lng: 0,
  },
});

new CustomMap('map'); //tu przekazujemy argument 'map' do jakiego ma odnosić się instancja klasy CustomMap
