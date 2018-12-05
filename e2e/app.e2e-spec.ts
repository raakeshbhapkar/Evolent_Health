import { FivePage } from './app.po';

describe('five App', () => {
  let page: FivePage;

  beforeEach(() => {
    page = new FivePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
