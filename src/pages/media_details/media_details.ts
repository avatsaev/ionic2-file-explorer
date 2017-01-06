import {NavParams} from 'ionic-angular';
import {StreamingMedia} from 'ionic-native';
import {Component} from '@angular/core'
import {MediaRef} from "../../app/media_item/media_ref";
import {PhotoViewer} from 'ionic-native';

import { Storage } from '@ionic/storage';

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
      private storage:Storage
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

    this.storage.get('favs').then((favs) => {
      if(!favs.includes(this.media.fileEntry.toURL())) favs.push(this.media.fileEntry.toURL());
    })

  }



}
