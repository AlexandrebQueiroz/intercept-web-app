import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NbDialogService, NbWindowControlButtonsConfig, NbWindowService } from '@nebular/theme';
import { MapDialogComponent } from './map-dialog/map-dialog.component';
import { MapWindowComponent } from './map-window/map-window.component';
import { MapService } from './map.service';

@Component({
  styleUrls: ['./map.component.scss'],
  templateUrl: './map.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MapComponent {

  public coordenadas: any[];
  public loaded: boolean = false;

  constructor(
    public service: MapService,    
    private windowService: NbWindowService,
    public dialogService: NbDialogService,
    ){

    this.service.getMap().subscribe(
      coordenadas => {
        this.coordenadas = coordenadas;
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

  public showLegenda(){
    const buttonsConfig: NbWindowControlButtonsConfig = {
      minimize: true,
      maximize: true,
      fullScreen: true,
    };

    this.windowService.open(MapWindowComponent, {buttons: buttonsConfig });
  }

}
