import { Component } from '@angular/core';

import {NavController, NavParams, Platform} from 'ionic-angular';
import {File} from "ionic-native";
import {MediaRef} from "../../app/media_item/media_ref";
import {FolderRef} from "../../app/folder_item/folder_ref";
import {FsProviderService} from "../../app/providers/fs_provider.service";

declare var cordova: any;

@Component({
  templateUrl: 'folder.html',
  styles: [`

    ion-list-header{
      margin-top: 10px;
    }
  

  `]
})




export class FolderPage {

  mediaTypeFilter:string='all';
  currentPath:string;
  //fs:string = cordova.file.dataDirectory;

  fileList:Array<MediaRef | FolderRef> = [];

  constructor(public navCtrl: NavController,
              private navParams:NavParams,
              private platform:Platform,
              private fs:FsProviderService) {

    this.currentPath = navParams.get("path");
    console.log("CURRENT PATH: "+this.currentPath)


    fs.listDir(this.currentPath).then((files) => {
      console.log("promise resolved");
      for(let file of files){
        console.log(JSON.stringify(file));

        if(file.isDirectory){
          this.fileList.push ( new FolderRef(file.name, file.fullPath.substring(1)))
        }else{
          this.fileList.push(new MediaRef(file.name, 'image', file.fullPath.substring(1)))
        }

      }
    });


  }


  getFolders(){
    return this.fileList.filter(item => item instanceof FolderRef);
  }

  getImages(){
    return this.fileList.filter(item => item.type == 'image');
  }



}
