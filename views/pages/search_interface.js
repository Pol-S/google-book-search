
      function capture_search_term() {
        var booksearch = document.getElementById('bookquery').value;    
        check_query(booksearch) 
      }
        
      function check_query(booksearch) {        
        if (booksearch.trim === '' ) {
          alert("Please input a title/author/publishing house.");
        }
        else {
          booksearch = booksearch.replace(/\s/g, '+');
          call_api(booksearch)
        }            
      }

      function call_api(booksearch) {
        fetch('https://www.googleapis.com/books/v1/volumes?q=' + booksearch)
          .then(function(response) {
            return response.json();
          })
          .then(function(myJson) {
            console.log(JSON.stringify(myJson));
            bookInfo(myJson);
          })
          .catch(error => {
            console.log('Connection Error');
            printError();
          });
      }

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