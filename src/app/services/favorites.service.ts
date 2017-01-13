import { Injectable } from '@angular/core';
import {File, FileEntry} from "ionic-native";
import {Storage} from "@ionic/storage";
import {MediaRef} from "../../app/media_item/media_ref";
import {Observable} from "rxjs";

declare var cordova: any;

@Injectable()
export class FavoritesService {

  private appFavs = new Array<MediaRef>();
  favoritesList$ = Observable.of(this.appFavs);

  constructor(private storage:Storage) {

    this.storage.get("favs").then(favs => {
      if(!favs) this.storage.set('favs', []);
      this.loadFavs();
    });

  }

  loadFavs(){

    this.storage.get("favs").then(favs => {

      for(let fav of favs){

        let dir = fav.substring(0,fav.lastIndexOf("/")+1);
        let fileName = fav.split("/").pop();

        File.resolveDirectoryUrl(dir)
            .then( dirEntry => File.getFile(dirEntry, fileName, {create: false}))
            .then( file =>  this.appFavs.push( new MediaRef( file as FileEntry)))
      }

    });

  }

  addFavorite(media:MediaRef){

    this.storage.get('favs').then((favs) => {

      if(!favs.includes(media.fileEntry.toURL())) {
        favs.push(media.fileEntry.nativeURL);
        this.appFavs.push(media);
        this.storage.set('favs', favs);
      }else{
        favs.splice(favs.indexOf(media.fileEntry.nativeURL), 1);
        this.storage.set('favs', favs);
        this.appFavs.splice(this.appFavs.indexOf(media),1);
      }

    });

  }

  isFavorited(media){
    return this.appFavs.filter(fav => fav.fileEntry.nativeURL == media.fileEntry.nativeURL).length
  }

}
