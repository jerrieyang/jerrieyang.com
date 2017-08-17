import { Jerrieyang.ComPage } from './app.po';

describe('jerrieyang.com App', () => {
  let page: Jerrieyang.ComPage;

  beforeEach(() => {
    page = new Jerrieyang.ComPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
