import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { ChargePage } from '../pages/charge/charge';
import { CardModule } from 'ngx-card/ngx-card';
import { Stripe } from '@ionic-native/stripe';
import { ChargeProvider } from '../providers/ChargeProvider';

@NgModule({
  declarations: [
    MyApp,
    ChargePage
  ],
  imports: [
    HttpModule,
    BrowserModule,
    CardModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ChargePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ChargeProvider,
    Stripe,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
