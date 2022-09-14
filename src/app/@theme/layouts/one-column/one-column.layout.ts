import { Component, OnInit } from '@angular/core';
import { NbMediaBreakpointsService, NbSidebarService, NbThemeService } from '@nebular/theme';
import { Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import { LayoutService } from '../../../@core/utils';


@Component({
  selector: 'ngx-one-column-layout',
  styleUrls: ['./one-column.layout.scss'],
  templateUrl: './one-column.layout.html',
})
export class OneColumnLayoutComponent implements OnInit {
  private destroy$: Subject<void> = new Subject<void>();
  private currentBreakpointWidth: number;

  constructor(
    private sidebarService: NbSidebarService,
    private layoutService: LayoutService,
    private breakpointService: NbMediaBreakpointsService,
    private themeService: NbThemeService,
    ){}



  ngOnInit(): void {
  
      this.themeService.onMediaQueryChange()
        .pipe(
          map(([, currentBreakpoint]) => currentBreakpoint),
          takeUntil(this.destroy$),
        )
        .subscribe(currentBreakpoint  => {
          this.currentBreakpointWidth = currentBreakpoint.width 
        });
  }


  onSwipeLeft($event){
    const { xl, lg, is } = this.breakpointService.getBreakpointsMap();
    if (this.currentBreakpointWidth <= is) {
      this.sidebarService.collapse('menu-sidebar');
      this.layoutService.changeLayoutSize();
    }
    else if (this.currentBreakpointWidth > is ){
      this.sidebarService.compact('menu-sidebar');
      this.layoutService.changeLayoutSize();
    }
  }

  onSwipeRight($event){
    console.log('onSwipeRight')
    this.sidebarService.expand('menu-sidebar');
    this.layoutService.changeLayoutSize();
  }

}
