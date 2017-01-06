import { Component } from '@angular/core';

import {NavParams} from 'ionic-angular';
import {DirectoryEntry, FileEntry} from "ionic-native";
import {MediaRef} from "../../app/media_item/media_ref";
import {FolderRef} from "../../app/folder_item/folder_ref";
import {FsProviderService} from "../../app/providers/fs_provider.service";
import { LoadingController } from 'ionic-angular';

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
  loader = this.loadingCtrl.create({
    content: "Please wait..."
  });

  fileList:Array<MediaRef | FolderRef> = [];

  constructor(private navParams:NavParams,
              private fs:FsProviderService,
              private loadingCtrl: LoadingController) {

    this.currentPath = navParams.get("path");

    if(!this.currentPath) this.currentPath = ".";

    this.loader.present();

    fs.listDir(this.currentPath).then((files) => {

      for(let file of files){

        if(file.isDirectory){
          this.fileList.push ( new FolderRef(file.name, file.fullPath.substring(1), file as DirectoryEntry) )
        }else{
          this.fileList.push( new MediaRef(file.name, file.fullPath.substring(1), file as FileEntry) )
        }

      }

      this.loader.dismissAll()
    }).catch((err)=>{
      console.error(err);
      this.loader.dismissAll();
    });
  }


  getFolders(){
    return this.fileList.filter(item => item instanceof FolderRef);
  }

  getImages(){
    return this.fileList.filter(item => item.type == 'image');
  }

  getVideos(){
    return this.fileList.filter(item => item.type == 'video');
  }

  getAudios(){
    return this.fileList.filter(item => item.type == 'music');
  }


}
