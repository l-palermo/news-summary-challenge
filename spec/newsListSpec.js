function apiData() {
  console.log('returns data from the API')
  var newslist = new newsList();
  var apiMockURL = 'http://192.168.1.173:3000'
  // console.log(newslist.getData(apiMockURL))
  // console.log(1)
 // newslist.getData(apiMockURL)
  // assert.isTrue(newslist.display(array) == '<ul><li id=0><a href=\'#oi\'>hey</a></li></ul>')
}
apiData();

// lunch a server with a different port and upload the mockd html on that server thn run test 
// that should fetch data from that page 'mockd api' and return it as promise