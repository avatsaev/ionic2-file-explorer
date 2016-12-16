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

  fileList:Array<MediaRef | FolderRef>;

  constructor(public navCtrl: NavController,
              private navParams:NavParams,
              private platform:Platform,
              private fs:FsProviderService) {

    this.currentPath = navParams.get("path");



    let fileA = new MediaRef("dd.png", "image", "metadata");
    let fileB = new MediaRef("dd.mp4", "video", "metadata");
    let fileC = new MediaRef("dd.mp3", "music", "metadata");
    let fileD = new FolderRef("other", "folder", "/media/other/");

    //fs.listDir('.');

    this.fileList = [];


    // console.log(cordova.file.externalRootDirectory);
    // //cordova.file.externalRootDirectory
    // File.listDir(cordova.file.applicationDirectory, "").then(
    //     (files) => {
    //       console.log(files)
    //     }
    // ).catch(
    //     (err) => {
    //       console.error(err);
    //     }
    // );

  }


  getFolders(){
    return this.fileList.filter(item => item.type == 'folder');
  }



}
