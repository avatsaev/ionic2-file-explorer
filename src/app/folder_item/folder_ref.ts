import {DirectoryEntry} from 'ionic-native';


export class FolderRef{

  path:string;
  name:string;
  icon:string;
  icon_color:string;
  type:string;
  metadata:any;
  directoryEntry:DirectoryEntry;


  constructor(filename:string, path:string, dir:DirectoryEntry){
    this.directoryEntry = dir;
    this.name = filename;
    this.path = path;
    this.type = 'folder'
    this.icon = 'ios-folder-outline';
    this.icon_color = '#487EED';
  }

}