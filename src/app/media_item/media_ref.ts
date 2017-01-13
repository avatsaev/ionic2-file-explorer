


import {FileEntry} from "ionic-native";

export class MediaRef{
  path:string;
  name:string;
  type:string;
  icon:string
  icon_color:string;
  fileEntry:FileEntry;
  metadata:any;
  extension:string;


  constructor(file:FileEntry){

    this.fileEntry = file;
    this.name = this.fileEntry.name;
    this.path = this.fileEntry.fullPath.substring(1);

    this.extension = this.name.substr(this.name.lastIndexOf('.') + 1);

    if(this.extension == "jpg" || this.extension == "jpeg" || this.extension == "png") this.type = "image";
    else if(this.extension == "mp4" || this.extension == "avi") this.type = "video";
    else if(this.extension == "mp3" || this.extension == "wav") this.type = "music";
    else this.type  = "other";

    switch (this.type){

      case 'music':
        this.icon = 'ios-musical-notes';
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
