import {NavParams} from 'ionic-angular';
import {StreamingMedia} from 'ionic-native';
import {Component} from '@angular/core'
import {MediaRef} from "../../app/media_item/media_ref";
import {PhotoViewer} from 'ionic-native';

import {FavoritesService} from "../../app/providers/favorites.service";

declare var Media: any;

@Component({
  templateUrl: "media_details.html",
  styles:[`
    .fad-bottom-btn{
      margin-bottom: 50px;
    }

  `]
})

export class MediaDetails{

  media:MediaRef;

  constructor(
      private navParams:NavParams,
      private favService:FavoritesService
  ){

    this.media = navParams.get("media") as MediaRef;

  }


  playVideo(){
    StreamingMedia.playVideo(this.media.fileEntry.toURL());
  }

  openImage(){
    PhotoViewer.show(this.media.fileEntry.toURL());
  }

  playMusic(){
    StreamingMedia.playAudio(this.media.fileEntry.toURL());
  }


  favorite(){

    this.favService.addFavorite(this.media);

  }

  isFavorited(){
    return this.favService.isFavorited(this.media);
  }



}
