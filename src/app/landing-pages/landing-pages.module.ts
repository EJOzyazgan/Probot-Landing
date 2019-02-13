import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {ContactComponent} from './contact/contact.component';
import {LandingPagesComponent} from './landing-pages.component';
import {LandingPagesRoutingModule} from './landing-routing.module';
import {MatButtonModule, MatIconModule, MatSidenavModule, MatToolbarModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {EventComponent} from './event/event.component';


@NgModule({
  declarations: [
    LandingPagesComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    EventComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    LandingPagesRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    FlexLayoutModule
  ]
})
export class LandingPagesModule {}
