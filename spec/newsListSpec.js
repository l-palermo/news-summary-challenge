function apiData() {
  console.log('returns data from the API')
  var newslist = new newsList();
  var data = newslist.getData()
  assert.isTrue(data, Promise)
}
apiData();

