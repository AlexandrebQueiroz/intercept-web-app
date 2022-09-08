import { ChangeDetectionStrategy, Component, TemplateRef, ViewChild } from '@angular/core';
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

  public tipoIConeAntenaUm = 'assets/icon/radio/radio-outline-red-48-48.svg';
  public tipoIConeAntenaDois = 'assets/icon/radio/radio-outline-yellow-48-48.svg'
  public tipoIconeFiscal = 'assets/icon/pin/pin-outline-black.svg';

  public data: any;
  public loaded: boolean = false;

  constructor(
    public service: MapService,    
    private windowService: NbWindowService,
    public dialogService: NbDialogService,
    ){

    this.service.getMap().subscribe(
      data => {
        this.data = data;
        this.data?.points?.forEach(point => {

          if(point.tipo === 1){
            point.tipo = this.tipoIConeAntenaUm
          }

          else if (point.tipo === 2){
            point.tipo = this.tipoIConeAntenaDois
          }

          else if (point.tipo === 3){
            point.tipo = this.tipoIconeFiscal
          }


        });
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
