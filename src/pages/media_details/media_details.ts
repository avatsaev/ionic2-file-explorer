import {NavParams} from 'ionic-angular';

import {Component} from '@angular/core'
import {MediaRef} from "../../app/media_item/media_ref";

import { Camera } from 'ionic-native';


@Component({
  templateUrl: "media_details.html"
})

export class MediaDetails{

  media:MediaRef;


  constructor(

      private navParams:NavParams
  ){

    this.media = navParams.get("media") as MediaRef;

    Camera.getPicture().then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64:
      let base64Image = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      // Handle error
    });



  }

}
