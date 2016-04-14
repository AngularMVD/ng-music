import {
  it,
  iit,
  describe,
  ddescribe,
  expect,
  inject,
  injectAsync,
  TestComponentBuilder,
  beforeEachProviders
} from 'angular2/testing';
import {provide} from 'angular2/core';
import {AlbumsService} from './albums-service';


describe('AlbumsService Service', () => {

  beforeEachProviders(() => [AlbumsService]);


  it('should ...', inject([AlbumsService], (service: AlbumsService) => {

  }));

});
