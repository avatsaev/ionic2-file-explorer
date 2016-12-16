import {File} from 'ionic-native';


export class MediaRef{
  path:string;
  file_name:string;
  ext:string;
  type:string;
  icon:string
  icon_color:string;
  ref:File;
  metadata:any;


  constructor(filename:string, type:string, metadata:string){
    this.type = type;
    this.file_name = filename;
    this.metadata = metadata;

    switch (this.type){

      case 'music':
        this.icon = 'ios-musical-notes-outline';
        this.icon_color = '#DE5444';
        break;
      case 'video':
        this.icon = 'ios-videocam-outline';
        this.icon_color = '#836EE2';
        break;
      case 'image':
        this.icon = 'ios-images-outline';
        this.icon_color = '#65C96C';
        break;
      default:
          break;
    }

  }
}
