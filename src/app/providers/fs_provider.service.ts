import { Injectable } from '@angular/core';
import {File} from "ionic-native";
import {Platform} from "ionic-angular";
declare var cordova: any;

@Injectable()
export class FsProviderService {

  constructor() {

    //
    // {"isFile":false,"isDirectory":true,"name":"Documents","fullPath":"/./Documents/","filesystem":"<FileSystem:
    //   files>","nativeURL":"file:///data/user/0/com.ionicframework.mediastudio787932/files/./Documents/"}




        File.listDir(cordova.file.externalRootDirectory, '.').then(
        (files) => {
          // do something
          console.log("FILES")

          for(let file of files ){
            console.log("..")
            console.log(JSON.stringify(file));
          }

        }
    ).catch(
        (err) => {
          console.log(JSON.stringify(err))
          // do something
        }
    );
  }



  listDir(path:string){

    File.listDir(cordova.externalRootDirectory, path).then( (res) => {
      console.log(JSON.stringify(res));
    })


  }



}
