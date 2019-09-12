var fetch = function() {
  return Promise.resolve({
    json: () =>
      Promise.resolve(
        { response : {
          results: {
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
        }}
      }
      )
  });
};