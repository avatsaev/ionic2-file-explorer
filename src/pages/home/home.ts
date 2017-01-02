import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import {FolderPage} from "../folder/folder";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
    this.navCtrl.setRoot(FolderPage, {path: '.'})
  }

}
