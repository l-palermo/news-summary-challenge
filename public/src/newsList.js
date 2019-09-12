(function(exports) {

  function newsList() {};

  newsList.prototype = {

    getData: (api) => {
     return fetch(api).then(promise => {
        return promise.json()
      }).then(data => {
        return data.response.results;
      })
    },

    createList: (arg) => {
      var counter = 0; var titles= [];
      arg.map( element => {
        titles.push('<li id='+counter+'><a href=\''+ element.webUrl +'\'>' + element.webTitle + '</a></li>'); counter++;
      });
      return '<ul>' + titles.join('') + '</ul>';
    },

    display: (list, doc = document) => {
      var HTMLtag = doc.getElementById('api-title');
      HTMLtag.innerHTML = list;
  }
}
  exports.newsList = newsList
})(this);
