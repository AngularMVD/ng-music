import {Component} from 'angular2/core';
import {NgFor} from 'angular2/common';

import {AlbumCover} from '../album-cover/album-cover';
import {AlbumsService} from '../albums-service/albums-service';

@Component({
  selector: 'albums-page',
  templateUrl: 'app/albums-page/albums-page.html',
  styleUrls: ['app/albums-page/albums-page.css'],
  providers: [AlbumsService],
  directives: [AlbumCover, NgFor],
  pipes: []
})
export class AlbumsPage {
	albums: any = [];

  constructor(private _albumsService: AlbumsService) {
		_albumsService.getAllAlbums().subscribe(albums => this.albums = albums);
  }

}
