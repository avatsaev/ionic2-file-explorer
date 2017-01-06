import { Component } from '@angular/core';
import {MediaRef} from "../../app/media_item/media_ref";
import {Observable} from "rxjs";
import {FavoritesService} from "../../app/providers/favorites.service";

declare var cordova: any;

@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html'
})

export class FavoritesPage {


  fileList$:Observable<Array<MediaRef>> ;

  mediaTypeFilter:string='all';

  constructor(private favService:FavoritesService) {
    this.fileList$ = this.favService.favoritesList$;
  }

}
