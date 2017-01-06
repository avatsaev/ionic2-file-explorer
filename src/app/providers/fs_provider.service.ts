import { Injectable } from '@angular/core';
import {File, Entry, FileEntry, DirectoryEntry} from "ionic-native";
import { Platform } from 'ionic-angular';

declare var cordova: any;

@Injectable()
export class FsProviderService {

  private fileSystem:string = cordova.file.externalRootDirectory;
  //private transfer = new Transfer();

  constructor(private pl:Platform) {

  }


  getFile(path:string):Promise<FileEntry>{
    return File.resolveDirectoryUrl(path).then(dir => {return File.getFile(dir, path, {create:false})});
  }



  listDir(path:string):Promise<Entry[]>{
    return File.listDir(this.fileSystem, path)
  }



}
