(function(exports) {

  function newsListMock() {
    this.getData = () => {
      return Promise.resolve(
        [{
          apiUrl: "https://content.guardianapis.com/politics/live/2019/aug/28/spending-review-set-for-next-week-fuels-election-speculation-live",
          id: "politics/live/2019/aug/28/spending-review-set-for-next-week-fuels-election-speculation-live",
          isHosted: false,
          pillarId: "pillar/news",
          pillarName: "News",
          sectionId: "politics",
          sectionName: "Politics",
          type: "liveblog",
          webPublicationDate: "2019-08-28T10:52:52Z",
          webTitle: "Brexit: Speaker John Bercow calls parliamentary suspension 'constitutional outrage' – live",
          webUrl: "https://www.theguardian.com/politics/live/2019/aug/28/spending-review-set-for-next-week-fuels-election-speculation-live"
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
