import { Injectable } from '@angular/core';
import {File, Entry} from "ionic-native";
import { Platform } from 'ionic-angular';

declare var cordova: any;

@Injectable()
export class FsProviderService {

  private fileSystem:string = cordova.file.externalRootDirectory;
  //private transfer = new Transfer();

  constructor(private pl:Platform) {


    //console.log("--------");
    //console.log(cordova.file);
  }


  initFs(){

    //File.createDir(this.fileSystem, "Media", true);

    // this.transfer.onProgress((e) => {
    //   console.log(e)
    // });
    //
    //
    //
    // this.transfer.download("http://i.imgur.com/hevUEZp.png", this.fileSystem + '/Media/file.png').then((entry) => {
    //   console.log('download complete: ' + entry.toURL());
    // }, (error) => {
    //   // handle error
    //   console.log(error)
    // });

  }



  listDir(path:string):Promise<Entry[]>{
    return File.listDir(this.fileSystem, path)
  }



}
