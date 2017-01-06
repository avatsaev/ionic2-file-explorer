import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { FavoritesPage } from '../favorites/favorites';
import {FolderPage} from "../folder/folder";


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tab1Root: Component = FolderPage;
  tab2Root: Component = FavoritesPage;
  tab3Root: Component = AboutPage;

  constructor() {}
}
