(function(exports){

  var API = 'http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/politics'
  // var API = 'http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/politics/blog/2014/feb/17/alex-salmond-speech-first-minister-scottish-independence-eu-currency-live?show-fields=body'
  // var API = 'http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/politics/blog'

  function Controler() {
    this.request = new XMLHttpRequest();
  }

  Controler.prototype = {

    displayNewsList: (newslist = new newsList(), api = API) => {
      return newslist.getData(api)
      .then((titles) => {
        var list = newslist.createList(titles);
        newslist.display(list);
      });
    },

    displaySummary: function() {
      var summary = new Summary();
      summary.display();
    }
  }
  exports.Controler = Controler;
})(this);