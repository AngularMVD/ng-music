import {Component} from 'angular2/core';

import {AlbumCover} from '../album-cover/album-cover';

@Component({
  selector: 'albums-page',
  templateUrl: 'app/albums-page/albums-page.html',
  styleUrls: ['app/albums-page/albums-page.css'],
  providers: [],
  directives: [AlbumCover],
  pipes: []
})
export class AlbumsPage {

  constructor() {}

}
