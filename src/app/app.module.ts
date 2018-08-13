import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AboutPage } from '../pages/about/about';
import { MenuPage } from '../pages/menu/menu';
import { ContactPage } from '../pages/contact/contact';
import { DishProvider } from '../providers/dish/dish';
import { LeaderProvider } from '../providers/leader/leader';
import { PromotionProvider } from '../providers/promotion/promotion';
import { ProcessHttpmsgProvider } from '../providers/process-httpmsg/process-httpmsg';
import { HttpModule } from '@angular/http';
import { baseURL } from '../shared/baseurl';
import { DishdetailPage } from '../pages/dishdetail/dishdetail';
import { FavoriteProvider } from '../providers/favorite/favorite';
import { FavoritesPage } from '../pages/favorites/favorites';

@NgModule({
  declarations: [
    AboutPage,
    MenuPage,
    ContactPage,
    MyApp,
    HomePage,
    DishdetailPage,
    FavoritesPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    MenuPage,
    ContactPage,
    HomePage,
    DishdetailPage,
    FavoritesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: 'BaseURL', useValue: baseURL },
    DishProvider,
    LeaderProvider,
    PromotionProvider,
    ProcessHttpmsgProvider,
    FavoriteProvider
  ]
})
export class AppModule {}
