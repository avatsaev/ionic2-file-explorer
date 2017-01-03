import {NavParams} from 'ionic-angular';

import {Component} from '@angular/core'
import { VideoPlayer } from 'ionic-native';
import {MediaRef} from "../../app/media_item/media_ref";
import { PhotoViewer } from 'ionic-native';

declare var Media: any;

@Component({
  templateUrl: "media_details.html"
})

export class MediaDetails{

  media:MediaRef;
  mediaInstance:any;
  mediaPlaying:boolean = false;


  constructor(
      private navParams:NavParams
  ){

    this.media = navParams.get("media") as MediaRef;

    if(this.media.type == 'music') this.mediaInstance = new Media(this.media.fileEntry.toURL());


  }


  playVideo(){
    VideoPlayer.play(this.media.fileEntry.toURL())
  }

  openImage(){
    if(this.media.type == 'image') PhotoViewer.show(this.media.fileEntry.toURL());
  }

  playMusic(){
    this.mediaPlaying = !this.mediaPlaying;

    if(this.mediaPlaying){
      this.mediaInstance.pause();
    }else{
      this.mediaInstance.play();

    }



  }



}
