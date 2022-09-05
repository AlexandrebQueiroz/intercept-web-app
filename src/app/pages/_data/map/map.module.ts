import { NgModule } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';
import { NbCardModule } from '@nebular/theme';
import { MapRoutingModule } from './map-routing.module';

import { MapComponent } from './map.component';

@NgModule({
  imports: [
    GoogleMapsModule,
    MapRoutingModule,
    NbCardModule,
  ],
  declarations: [
    MapComponent,
  ],
  providers: [
  ],
})
export class MapModule { }
