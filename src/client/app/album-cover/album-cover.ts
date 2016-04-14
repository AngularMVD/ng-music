import {Component, Input} from 'angular2/core';

@Component({
  selector: 'album-cover',
  templateUrl: 'app/album-cover/album-cover.html',
  styleUrls: ['app/album-cover/album-cover.css'],
  providers: [],
  directives: [],
  pipes: [],
})
export class AlbumCover {
	@Input() album: any;

  selectAlbum() {
		alert("Album selected");
  }
}
