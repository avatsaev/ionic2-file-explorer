import {File} from 'ionic-native';


export class FolderRef{

  path:string;
  file_name:string;
  type:string;
  icon:string
  icon_color:string;

  metadata:any;


  constructor(filename:string, type:string, path:string){
    this.type = type;
    this.file_name = filename;
    this.path = path;

    this.icon = 'ios-folder-outline';
    this.icon_color = '#487EED';


  }
}