(function(exports) {

  function Summary() {
    this._URL = 'http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url='
  }

  Summary.prototype = {

    display: function() {
      var newslist = document.getElementById('api-title');
      newslist.addEventListener('click', (event) => {
        event.preventDefault();
        var httpLink = event.path[0].href
        var link = this._apiLink(httpLink);
        return this._text(link)
      })
    },

    _apiLink: function(link) {
      return this._URL + link;
    },

    _text: function(link) {
      fetch(link).then(promise => {
        return promise.json();
      }).then(data => {
        var fullText = document.getElementById('api-body')
        fullText.innerHTML = data.text
      })
    }
  }

  exports.Summary = Summary
})(this);