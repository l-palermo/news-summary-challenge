function displayNewsList() {
  console.log('it display a list of titles as links');
  var controler = new Controler();
  var newsListM = new newsListMock();
  var mockdocument = document.createElement('div')
  mockdocument.setAttribute('class', 'api-title')
  assert.isTrue(controler.displayNewsList(newsListM, mockdocument) == undefined);
}
displayNewsList();

function displayFullArticle() {
  
}
displayFullArticle();

// function updateDomain() {
//   console.log('It update the domain');
//   var controler = new Controler();
//   var mockdocument = document.createElement('div')
//   mockdocument.setAttribute('class', 'title')
//   document.createElement('div').setAttribute('class', 'title')
//   mockdocument[key] = attribute['id']
//   console.log(mockdocument)
//   console.log(controler.updateDom())
//   assert.isTrue(controler.updateDom(mockdocument) == 'Ciao Luigi');
// }
// updateDomain()