import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { StudentsPipe } from './students.pipe';

@NgModule({
  declarations: [AppComponent, StudentsPipe],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, NgxPaginationModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
