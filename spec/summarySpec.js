function apiLink() {
  console.log('it display a list of titles as links');
  var controler = new Controler();
  var newsListM = new newsListMock();
  assert.isTrue(controler.displayNewsList(newsListM), '<li id=0><a href=\'test\'>test</a></li>');
}
apiLink();