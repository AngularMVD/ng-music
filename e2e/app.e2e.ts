import { MusicPage } from './app.po';

describe('music App', function() {
  let page: MusicPage;

  beforeEach(() => {
    page = new MusicPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('music Works!');
  });
});
