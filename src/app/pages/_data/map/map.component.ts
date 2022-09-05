import { Component } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { GridPanelSeriesComponent } from '@swimlane/ngx-charts';
import { MapDialogComponent } from './map-dialog/map-dialog.component';
import { MapService } from './map.service';

@Component({
  styleUrls: ['./map.component.scss'],
  templateUrl: './map.component.html',
})
export class MapComponent {

  public data: any;
  public loaded: boolean = false;

  constructor(
    public service: MapService,    
    public dialogService: NbDialogService,
    ){

    this.service.getMap().subscribe(
      data => {
        this.data = data;
        this.loaded = true;
        }   
      );
  }

  public showDialog(data: any){
    this.dialogService.open(MapDialogComponent, {
      context: {
        data: data
      },
    });
  }

}
