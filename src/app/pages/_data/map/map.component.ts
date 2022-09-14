import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NbDialogService, NbWindowControlButtonsConfig, NbWindowService } from '@nebular/theme';
import { MapDialogComponent } from './map-dialog/map-dialog.component';
import { MapWindowComponent } from './map-window/map-window.component';
import { MapService } from './map.service';

@Component({
  styleUrls: ['./map.component.scss'],
  templateUrl: './map.component.html',
})
export class MapComponent {

  public coordenadas: any[] = [];
  public antenas: number;
  public loaded: boolean = false;
  public numAtenas = 0;
  public numFisical = 0;

  constructor(
    public service: MapService,    
    private windowService: NbWindowService,
    public dialogService: NbDialogService,
    ){

    this.service.getMap().subscribe(
      coordenadas => {

        coordenadas.antenas.forEach(element => {
          element.icon = 'assets/icon/radio/radio-outline-red-48-48.svg';
          element.type = 'antena';
          this.coordenadas.push({element})
        });
        
        coordenadas.fiscais.forEach(element => {
          element.type = 'fiscal';
          element.icon = 'assets/icon/pin/pin-outline-black.svg';
          this.coordenadas.push({element})
        });

        this.numAtenas = coordenadas.antenas.length;
        this.numFisical = coordenadas.fiscais.length;

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

  public showLegenda(){
    const buttonsConfig: NbWindowControlButtonsConfig = {
      minimize: true,
      maximize: true,
      fullScreen: true,
    };

    this.windowService.open(MapWindowComponent, {buttons: buttonsConfig });
  }

}
