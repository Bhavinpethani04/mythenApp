import { CommonModule, NgIf } from '@angular/common';
import { Component, Input, ViewChild } from '@angular/core';
import {
  GoogleMapsModule,
  MapInfoWindow,
  MapMarker,
} from '@angular/google-maps';
import { bootstrapApplication } from '@angular/platform-browser';
import { appData } from '../../shared/models/commonData';
import { HeaderComponent } from '../../core/components/header/header.component';
import { SidebarComponent } from '../../core/components/sidebar/sidebar.component';
import { PiplineistComponent } from '../../shared/components/piplineist/piplineist.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    GoogleMapsModule,
    MapMarker,
    CommonModule,
    NgIf,
    HeaderComponent,
    SidebarComponent,
    PiplineistComponent,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  // data initalization
  @Input() appData: any[] = appData;
  isHidden: boolean = false;
  constructor() {}
  ngOnInit() {}

  display: any; // Property to store latitude and longitude data from the map
  center: google.maps.LatLngLiteral = {
    lat: 43.4183633,
    lng: -80.4697557,
  };

  zoom = 10; // Initial zoom level for the map

  // current move moment of mouse on map
  move(event: google.maps.MapMouseEvent) {
    if (event.latLng != null) {
      this.display = event.latLng.toJSON();
    }
  }

  // markers Initialized
  markerBlack = {
    url: '../../../assets/markerBlack.png',
    scaledSize: new google.maps.Size(30, 30),
  };

  markerGreen = {
    url: '../../../assets/markerGreen.png',
    scaledSize: new google.maps.Size(30, 30),
  };

  markerOrange = {
    url: '../../../assets/markerOrange.png',
    scaledSize: new google.maps.Size(30, 30),
  };

  markerBlue = {
    url: '../../../assets/markerBlue.png',
    scaledSize: new google.maps.Size(30, 30),
  };


// highlight on press on marker
  openInfo(event: any) {
    appData.forEach((data, index) => {
      if (data.latLong.lat === event.lat && data.latLong.lng === event.lng) {
        appData[index].isSelected = true;
      } else {
        appData[index].isSelected = false;
      }
    });
  }

  // map marker with filter function
  setMapIcon(status: any) {
    console.log('status', status);
    if (status === 'active') {
      return this.markerGreen;
    } else if (status === 'quoted') {
      return this.markerBlue;
    } else if (status === 'panding') {
      return this.markerOrange;
    } else if (status === 'renewal') {
      return this.markerBlack;
    } else {
      return this.markerBlack;
    }
  }

  // show and hide map
  showMap = (): void => {
    this.isHidden = !this.isHidden;
  };
}

bootstrapApplication(DashboardComponent);
