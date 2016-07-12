import { OpenJobPage } from './app.po';

describe('open-job App', function() {
  let page: OpenJobPage;

  beforeEach(() => {
    page = new OpenJobPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
