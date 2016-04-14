import {Component} from 'angular2/core';
import {NgFor} from 'angular2/common';
import {HTTP_PROVIDERS, Http} from 'angular2/http';

import {AlbumCover} from '../album-cover/album-cover';

@Component({
  selector: 'albums-page',
  templateUrl: 'app/albums-page/albums-page.html',
  styleUrls: ['app/albums-page/albums-page.css'],
  providers: [HTTP_PROVIDERS],
  directives: [AlbumCover, NgFor],
  pipes: []
})
export class AlbumsPage {
	albums: any = [];

  constructor(private http: Http) {
		http
				.get('/api/albums')
				.subscribe(response => {
					this.albums = response.json()['albums'];
				})
  }

}
