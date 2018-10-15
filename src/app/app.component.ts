import { Component } from '@angular/core';
import { Url } from 'url';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'My first AGM project';
  lat: number =51.373858;
  lng: number = 5.809007;
  public origin: any;
  public destination: any;
  
  ngOnInit() {
   
  }
   
  getDirection(marker,latitude: number,longitude: number) {
    this.origin = { lat: 51.373858, lng: 5.809007 }
    this.destination = { lat: latitude, lng: longitude}
    console.log('xyz');
    
//marker.iconUrl = "http://maps.google.com/mapfiles/ms/icons/red-dot.png";
  }
 
  public renderOptions = {
    suppressMarkers: true,
}

markers: marker[] = [
  {
    lat:51.373858,
    lng: 5.809007,
    label: '',
   name:"KFc",
   rating:"****",
   iconUrl:"assets/images/icons8-user-location-48.png",
   markerClickable:false,
  
  },
  {
    lat: 51.373858,
    lng: 7.215982,
    label: 'B',
    markerClickable:true,
  
    name:"subway",
    rating:"****",
    iconUrl:"",
 
  },
  {
    lat: 51.723858,
    lng: 7.895982,
    label: 'C',
    markerClickable:true,
    
    name:"mac-donalds",
    rating:"****",

    iconUrl:"",

  }
]
}
interface marker {
lat: number;
lng: number;
label?: string;
markerClickable:boolean;

name:string,
rating:string,
iconUrl:string,

}
