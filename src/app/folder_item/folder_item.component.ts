import {Platform} from 'ionic-angular';
import { NavController } from 'ionic-angular';
import {Component, Input} from '@angular/core'
import {FolderRef} from "./folder_ref";
import {FolderPage} from "../../pages/folder/folder";


@Component({
  selector: 'app-folder-item',
  templateUrl: "folder_item.component.html"
})

export class FolderItem{

  @Input() folder:FolderRef;


  constructor(
      private navCtrl:NavController,
      private platform:Platform
  ){

  }


  goToPage(params:any){
    console.log(params);

    if(params.path){
      this.navCtrl.push(FolderPage, {path: params.path});
    }


  }

}
