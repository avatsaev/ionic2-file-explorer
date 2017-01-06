import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import {FsProviderService} from "../../app/providers/fs_provider.service";
import {Storage} from "@ionic/storage";
import {MediaRef} from "../../app/media_item/media_ref";

@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html'
});

declare var cordova: any;

export class FavoritesPage {


  fileList:Array<MediaRef> = [];

  constructor(public navCtrl: NavController, private fs:FsProviderService, private storage:Storage) {


    this.storage.get('favs').then(favs => {
      console.log(favs);
      for(let fav of favs){

        this.fs.getFile(fav).then(file => {
          console.log(file);
        });

      }
    });



  }

}
