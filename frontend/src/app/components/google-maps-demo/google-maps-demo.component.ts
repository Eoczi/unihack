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
  ngOnInit(): void {
    const map = L.map('map').setView([45.760696, 21.226788], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    const marker = L.marker([51.505, -0.09]).addTo(map);

    map.on('click', (e) => {
      const lat = e.latlng.lat;
      const lng = e.latlng.lng;

      marker.setLatLng([lat, lng]);

      console.log('Latitude:', lat, 'Longitude:', lng);
    });
  }
}
