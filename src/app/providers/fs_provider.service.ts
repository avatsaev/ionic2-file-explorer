import { Injectable } from '@angular/core';
import {File, Entry} from "ionic-native";
import {Platform} from "ionic-angular";
declare var cordova: any;

@Injectable()
export class FsProviderService {

  fileSystem:string = cordova.file.dataDirectory;

  constructor() {

  }


  initFs(){
    // File.checkDir(cordova.file.dataDirectory, './Media').then( (res) =>{
    //   console.log(res)
    //   // if (!res){
    //   //   File.createDir(cordova.file.dataDirectory, "Media", false)
    //   // }
    // });



    File.createFile(this.fileSystem, "test_file.txt", true).then(res => console.log(res));
    File.createFile(this.fileSystem, "test_image_jpg", true).then(res => console.log(res));
    File.createFile(this.fileSystem, "test_video_avi", true).then(res => console.log(res));
    File.createFile(this.fileSystem, "test_audio_mp3", true).then(res => console.log(res));
  }



  listDir(path:string):Promise<Entry[]>{
    return File.listDir(cordova.file.dataDirectory, path)
  }



}
