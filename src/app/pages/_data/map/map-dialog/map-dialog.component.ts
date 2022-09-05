import { Component, Input } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'map-dialog',
  templateUrl: './map-dialog.component.html',
  styleUrls: ['./map-dialog.component.scss'],
})
export class MapDialogComponent {

  @Input() 
  public data: any;

  constructor(protected ref: NbDialogRef<MapDialogComponent>) {}

  dismiss() {
    this.ref.close();
  }

}
