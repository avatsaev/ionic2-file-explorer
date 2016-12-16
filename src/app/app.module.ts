import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import {FolderPage} from "../pages/folder/folder";
import {MediaDetails} from "../pages/media_details/media_details";
import {FolderItem} from "./folder_item/folder_item.component";
import {MediaItem} from "./media_item/media_item.component";
import {FsProviderService} from "./providers/fs_provider.service";

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
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
    ContactPage,
    HomePage,
    TabsPage,
    FolderPage,
    MediaDetails
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, FsProviderService]
})
export class AppModule {}
