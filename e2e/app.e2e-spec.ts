import { BoulderMappPage } from './app.po';

describe('boulder-mapp App', () => {
  let page: BoulderMappPage;

  beforeEach(() => {
    page = new BoulderMappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
