import { Component,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as L from 'leaflet';



@Component({
  selector: 'app-google-maps-demo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './google-maps-demo.component.html',
  styleUrl: './google-maps-demo.component.css'
})
export class GoogleMapsDemoComponent implements OnInit{
  //@ts-ignore
  private map: L.Map;
  private centroid: L.LatLngExpression = [42.3601, -71.0589]; //

  private initMap(): void {
    this.map = L.map('map', {
      center: this.centroid,
      zoom: 12
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 10,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    // create 5 random jitteries and add them to map
    const jittery = Array(5).fill(this.centroid).map( 
        x => [x[0] + (Math.random() - .5)/10, x[1] + (Math.random() - .5)/10 ]
      ).map(
        x => L.marker(x as L.LatLngExpression)
      ).forEach(
        x => x.addTo(this.map)
      );

    tiles.addTo(this.map);
  
  }

  constructor() { }

  ngOnInit(): void {
    this.initMap();
  }
}
