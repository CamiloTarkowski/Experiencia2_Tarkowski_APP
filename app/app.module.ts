import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { IonicStorageModule} from '@ionic/storage-angular';
import {Drivers} from '@ionic/storage';
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [AngularFireModule.initializeApp(environment.firebase),BrowserModule, IonicModule.forRoot(), AppRoutingModule,IonicStorageModule.forRoot({
    name: 'mydb',
    driverOrder:[Drivers.IndexedDB,Drivers.LocalStorage]
  })],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
