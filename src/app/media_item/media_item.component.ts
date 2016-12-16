import {Platform} from 'ionic-angular';
import { NavController } from 'ionic-angular';
import {Component, Input} from '@angular/core'
import {MediaRef} from "./media_ref";
import {MediaDetails} from "../../pages/media_details/media_details";


@Component({
  selector: 'app-media-item',
  templateUrl: "media_item.component.html"
})

export class MediaItem{

  @Input() media:MediaRef;


  constructor(
      private navCtrl:NavController,
      private platform:Platform
  ){



  }



  showDetails(){
        this.navCtrl.push(MediaDetails, {media: this.media});
  }

}
