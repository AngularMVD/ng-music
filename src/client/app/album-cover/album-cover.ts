import {Component} from 'angular2/core';

@Component({
  selector: 'album-cover',
  templateUrl: 'app/album-cover/album-cover.html',
  styleUrls: ['app/album-cover/album-cover.css'],
  providers: [],
  directives: [],
  pipes: []
})
export class AlbumCover {
	album: any;

  constructor() {
  	this.album = {
			id: 1000,
      artist: "Ramones",
      name: "Ramones",
      image: "http://ng-music.s3-sa-east-1.amazonaws.com/data/ramones-ramones.jpg",
  	}
  }

  selectAlbum() {
		alert("Album selected");
  }

}
