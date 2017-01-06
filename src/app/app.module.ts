import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { MyApp } from './app.component';

import { AboutPage, TabsPage, FolderPage, MediaDetails,FavoritesPage  } from '../pages'

import {FolderItem} from "./folder_item/folder_item.component";
import {MediaItem} from "./media_item/media_item.component";

import {FsProviderService} from "./providers/fs_provider.service";

import { Storage } from '@ionic/storage';
import {FavoritesService} from "./providers/favorites.service";


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    FavoritesPage,
    TabsPage,
    FolderPage,
    MediaItem,
    FolderItem,
    MediaDetails
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    FavoritesPage,
    TabsPage,
    FolderPage,
    MediaDetails
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, FsProviderService, Storage, FavoritesService]
})
export class AppModule {}
