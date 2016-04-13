import {describe, it, expect, beforeEachProviders, inject} from 'angular2/testing';
import {MusicApp} from '../app/music';

beforeEachProviders(() => [MusicApp]);

describe('App: Music', () => {
  it('should have the `defaultMeaning` as 42', inject([MusicApp], (app: MusicApp) => {
    expect(app.defaultMeaning).toBe(42);
  }));

  describe('#meaningOfLife', () => {
    it('should get the meaning of life', inject([MusicApp], (app: MusicApp) => {
      expect(app.meaningOfLife()).toBe('The meaning of life is 42');
      expect(app.meaningOfLife(22)).toBe('The meaning of life is 22');
    }));
  });
});

