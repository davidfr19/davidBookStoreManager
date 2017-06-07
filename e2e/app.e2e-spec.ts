import { DavidKeepPage } from './app.po';

describe('david-keep App', () => {
  let page: DavidKeepPage;

  beforeEach(() => {
    page = new DavidKeepPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
