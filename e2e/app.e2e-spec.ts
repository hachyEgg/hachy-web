import { Angular2FirebaseMaterialDemoPage } from './app.po';

describe('Hachy-web App', function() {
  let page: Angular2FirebaseMaterialDemoPage;

  beforeEach(() => {
    page = new Angular2FirebaseMaterialDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
