import { Deployment1Page } from './app.po';

describe('deployment1 App', function() {
  let page: Deployment1Page;

  beforeEach(() => {
    page = new Deployment1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
