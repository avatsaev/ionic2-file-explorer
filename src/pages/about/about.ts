import { Component } from '@angular/core';
import {AppVersion} from 'ionic-native';


@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  versionCode;
  versionNum;

  constructor() {

    AppVersion.getVersionCode().then( res => this.versionCode = res);
    AppVersion.getVersionNumber().then( res => this.versionNum = res);

  }

}
