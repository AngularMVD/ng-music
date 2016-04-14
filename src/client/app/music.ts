import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';
import {CliRouteConfig} from './route-config';

import {AlbumsPage} from './albums-page/albums-page';
import {TracksPage} from './tracks-page/tracks-page';

@Component({
  selector: 'music-app',
  providers: [ROUTER_PROVIDERS, HTTP_PROVIDERS],
  templateUrl: 'app/music.html',
  directives: [ROUTER_DIRECTIVES],
  pipes: []
})
@RouteConfig([
  {path: '/', component: AlbumsPage, name:'AlbumsPage'},
  { path: '/:id', component: TracksPage, name: 'TracksPage' },
].concat(CliRouteConfig))

export class MusicApp {
  defaultMeaning: number = 42;

  meaningOfLife(meaning?: number) {
    return `The meaning of life is ${meaning || this.defaultMeaning}`;
  }
}
