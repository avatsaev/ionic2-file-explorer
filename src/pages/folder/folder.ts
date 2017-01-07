import { Component } from '@angular/core';
import {
  ToastController,
  AlertController,
  LoadingController,
  NavParams
} from 'ionic-angular';

import {DirectoryEntry, FileEntry, StreamingMedia, StreamingVideoOptions} from "ionic-native";
import {MediaRef} from "../../app/media_item/media_ref";
import {FolderRef} from "../../app/folder_item/folder_ref";
import {FsService} from "../../app/services/fs.service";



declare var cordova: any;

@Component({
  templateUrl: 'folder.html',
  styles: [`

    ion-list-header{
      margin-top: 10px;
    }
       
    ion-toast.error .toast-wrapper {
	    background: rgb(209, 71, 71) !important;
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
              private fs:FsService,
              private loadingCtrl: LoadingController,
              private alertCtrl:AlertController,
              private toastCtrl:ToastController) {

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

  openRemoteDialog(){

    let prompt = this.alertCtrl.create({
      title: 'Open URL',
      message: "Enter a link to the remote resource (ex: http://example.com/my-file.mp3)",
      inputs: [
        {
          name: 'URL',
          placeholder: 'http://...'
        },
      ],
      buttons: [
        {
          text: 'Cancel'
        },
        {
          text: 'Open',
          handler: data => {

            const url = data.URL;

            let options: StreamingVideoOptions = {
              successCallback: () => {  },
              errorCallback: (e) => { console.log('Error streaming', e) },
              orientation: 'landscape'
            };

            const ext = url.substr(url.lastIndexOf('.') + 1);

            if(ext == "mp4" || ext == "avi") {

              StreamingMedia.playVideo(url, options);

            }else if(ext == "mp3" || ext == "wav") {

              StreamingMedia.playAudio(url, options);

            }else{

              this.toastCtrl.create({
                message: 'Unknown file format',
                position: 'bottom',
                cssClass: 'error',
                showCloseButton: true,
                duration: 3000
              }).present();

            }

          }
        }
      ]
    });
    prompt.present();

  }


}
