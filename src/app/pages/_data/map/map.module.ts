import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';
import { NbButtonModule, NbCardModule, NbListModule, NbWindowModule } from '@nebular/theme';
import { MapDialogComponent } from './map-dialog/map-dialog.component';
import { MapRoutingModule } from './map-routing.module';
import { MapWindowComponent } from './map-window/map-window.component';

import { MapComponent } from './map.component';
import { MapService } from './map.service';

@NgModule({
  imports: [
    GoogleMapsModule,
    MapRoutingModule,
    NbCardModule,
    CommonModule,
    NbButtonModule,
    NbWindowModule.forChild(),
    NbListModule,
  ],
  declarations: [
    MapComponent,
    MapDialogComponent,
    MapWindowComponent,
  ],
  providers: [
    MapService,
  ],
})
export class MapModule { }
