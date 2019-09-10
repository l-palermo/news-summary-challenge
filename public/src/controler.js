(function(exports){

  var API = 'http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/politics'
  // var API = 'http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/politics/blog/2014/feb/17/alex-salmond-speech-first-minister-scottish-independence-eu-currency-live?show-fields=body'
  // var API = 'http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/politics/blog'

  function Controler() {
    this.request = new XMLHttpRequest();
  }

  Controler.prototype = {

    displayNewsList: (newslist = new newsList(), api = API) => {
      console.log(api)
      console.log(newslist)
      newslist.getData(api)
      .then((titles) => {
        var list = newslist.createList(titles);
        newslist.display(list);
      });
    },

    displayFullArticle: function() {
      var newslist = document.getElementById('api-title')
      newslist.addEventListener('click', (event) => {
        event.preventDefault();
        var httpLink = event.path[0].href
        var displaytext = new displayText(httpLink)
        // var request = new XMLHttpRequest();
        fetch(displaytext(httplink)._URL).then(promise => {
          return promise.json();
        }).then(data => {
          var fullText = document.getElementById('api-body')
          fullText.innerHTML = data.text
        })
        // request.open('GET', displaytext._URL, true);
        // request.addEventListener('load', function() {
        //   var data = JSON.parse(this.response);
        //   var fullText = document.getElementById('api-body')
        //   fullText.innerHTML = data.text
        // })
        // request.send();
      })
    }
  }
  exports.Controler = Controler;
})(this);