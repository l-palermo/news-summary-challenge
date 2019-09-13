function apiData() {
  console.log('#getData returns data from the API');
  var newslist = new newsList();
  var data = newslist.getData();
  assert.isTrue(data, Promise);
}
apiData();

function createlist() {
  console.log('#createList returns a list of titles in html');
  var newslist = new newsList();
  var data = [{ webUrl: 'test', webTitle: 'test' }]
  assert.isTrue(newslist.createList(data), '<ul><li id=0><a href=\'test\'>test</a></li></ul>');
}
createlist();

function display() {
  console.log('#display dispaly the titles on the page');
  var newslist = new newsList();
  var mockdocument = document.createElement('div')
  mockdocument.id = 'api-title'
  console.log(mockdocument)
  var list = '<ul><li id=0><a href=\'test\'>test</a></li></ul>'
  console.log(newslist.display(list, mockdocument))
  //assert.isTrue(newslist.display(list, mockdocument), )
}
display();