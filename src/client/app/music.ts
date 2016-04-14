import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {CliRouteConfig} from './route-config';

import {AlbumsPage} from './albums-page/albums-page';

@Component({
  selector: 'music-app',
  providers: [ROUTER_PROVIDERS],
  templateUrl: 'app/music.html',
  directives: [ROUTER_DIRECTIVES, AlbumsPage],
  pipes: []
})
@RouteConfig([

].concat(CliRouteConfig))

export class MusicApp {
  defaultMeaning: number = 42;

  meaningOfLife(meaning?: number) {
    return `The meaning of life is ${meaning || this.defaultMeaning}`;
  }
}
