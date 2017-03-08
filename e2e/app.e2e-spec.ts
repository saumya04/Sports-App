import { SportsAppPage } from './app.po';

describe('sports-app App', () => {
  let page: SportsAppPage;

  beforeEach(() => {
    page = new SportsAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
