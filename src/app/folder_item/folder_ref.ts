import {DirectoryEntry} from 'ionic-native';


export class FolderRef{

  path:string;
  name:string;
  icon:string;
  icon_color:string;
  type:string;
  metadata:any;
  directoryEntry:DirectoryEntry;


  constructor(dir:DirectoryEntry){

    this.directoryEntry = dir;

    this.name = this.directoryEntry.name;
    this.path = this.directoryEntry.fullPath.substring(1);
    this.type = 'folder'
    this.icon = 'ios-folder-outline';
    this.icon_color = '#487EED';
  }

}