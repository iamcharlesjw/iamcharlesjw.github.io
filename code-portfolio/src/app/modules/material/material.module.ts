import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list'
 

@NgModule({
  imports: [
    MediaChange,
    MediaObserver,
    BreakpointObserver,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatGridListModule
  ],
  exports: [
    MediaChange,
    MediaObserver,
    BreakpointObserver,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatGridListModule
  ]
})
export class MaterialModule { }
