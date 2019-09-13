(function(exports) {

  function newsListMock() {
    this.getData = (api) => {
      api
      return Promise.resolve(
        [{
          webTitle: "test",
          webUrl: "test"
        }]
      )
    }
    this.createList = (titles) => {
      return '<li id=0><a href=\''+ titles[0].webUrl +'\'>' + titles[0].webTitle + '</a></li>'
    }
    this.display = (list) => {
      return list;
    }
  }
  exports.newsListMock = newsListMock;
})(this);
