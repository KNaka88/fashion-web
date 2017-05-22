import { FashionWebsitePage } from './app.po';

describe('fashion-website App', () => {
  let page: FashionWebsitePage;

  beforeEach(() => {
    page = new FashionWebsitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
