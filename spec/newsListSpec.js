function apiData() {
  console.log('returns data from the API')
  var newslist = new newsList();
  console.log(newslist.getData(apiMock))
  // assert.isTrue(newslist.display(array) == '<ul><li id=0><a href=\'#oi\'>hey</a></li></ul>')
}
apiData();