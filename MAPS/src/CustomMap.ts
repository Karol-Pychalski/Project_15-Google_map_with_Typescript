//wideo 380 (początek budowy)

//wideo 388 - dodanie export:
export interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
  //wideo 387:
  markerContent(): string;
  color: string;
}

export class CustomMap {
  private googleMap: google.maps.Map; //google.maps.Map będzie typem danych dla właściwości googleMap; private zapewnia nas, że poza tą klasą nie będzie można dokonać modyfikacji tej klasy i mapy

  constructor(divID: string) {
    this.googleMap = new google.maps.Map(document.getElementById(divID), {
      //divId został użyty zamiast 'map' aby kod był bardziej elastyczny
      zoom: 1,
      center: {
        lat: 0,
        lng: 0,
      },
    });
  }

  //wideo 385-387:
  addMarker(mappable: Mappable): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng,
      },
    });

    marker.addListener('clik', () => {
      const infoWindow = new google.maps.InfoWindow({
        content: mappable.markerContent(), //z wiedo 387
      });

      infoWindow.open(this.googleMap, marker);
    });
  }
}
