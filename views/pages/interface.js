
function checkQuery(booksearch) {        
  if (booksearch.trim() === '' ) {
    alert("No character inputted. Please input a title/author/publishing house.");
  }
  else {
    buttonSwap()
    callApi(booksearch)             
  }            
}
module.exports = checkQuery

function buttonSwap() {
  var reload = document.getElementById("reload_button");
  var search = document.getElementById("search_bar_area");
  document.getElementById("reload_button").style.visibility = 'visible';
  document.getElementById("search_button").style.visibility = 'hidden';
  top_area.replaceChild(reload, search);
}   
module.exports = buttonSwap


function callApi(booksearch){
  var tookTooLong = false;
  const timeLimit = 1000;

  new Promise(function(resolve, reject) {
      const timeout = setTimeout(function() {
          tookTooLong = true;
          reject(new Error('fetch timed out'));
      }, timeLimit);      
      fetch('https://www.googleapis.com/books/v1/volumes?q=' + booksearch)
      .then(function(response) {
        if(!tookTooLong) {
          console.log('fetch worked')
          resolve(response);
        }
      })
      .catch(function(err) {
        console.log('fetch failed');                
      });
  })
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
      console.log(JSON.stringify(myJson));
      bookInfo(myJson);
  })
  .catch(function(err) {
      console.log('Error');
      printError();
  });
}
module.exports = callApi

function bookInfo(response) {
for (var i = 0; i < response.items.length; i++) {
  var item = response.items[i];
  var book_hash = {}
  book_hash['info'] = item.volumeInfo.infoLink
  book_hash['title'] = item.volumeInfo.title
  book_hash['authors'] = item.volumeInfo.authors
  book_hash['publisher'] = item.volumeInfo.publisher
  book_hash['cover'] = item.volumeInfo.imageLinks.thumbnail
  printResults(book_hash)
}
}
module.exports = bookInfo

