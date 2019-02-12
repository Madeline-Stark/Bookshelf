

$(document).ready(function() {
  attachListeners();
});

function attachListeners() {
  $('button#authors').on('click', function (event) {
  		event.preventDefault()
  		getAuthors()
  	})

  $('button#author').on('click', function (event) {
    	event.preventDefault()
      //store author id
    	getAuthor(1)
    })

  $('button#books').on('click', function (event) {
      event.preventDefault()
      getBook()
    })

    $('button#newAuthor').on('click', function(event) {
      //prevent form from submitting the default way
      event.preventDefault();
      let newAuthorForm = Author.newAuthor();
      document.querySelector('#new-author-data').innerHTML = newAuthorForm
    });

  $('button#clear').on('click', function (event) {
    event.preventDefault()
    resetPage()
  })
}

function getAuthors() {
  //load/iterate through all authors using jquery-with map
  //for each button make new id-by author.id?
  //create button for getAuthor here!
  //load in id=authors-data
  $.get(`/authors`).done( function(data) {
    console.log(data)
  });
  $('#authors-data').text(Author.authorsHTML);
}

function getAuthor(authorID) {
  //load author based on id, using jquery-look at tic tac toe
  //call prototype here
  //load in id=author-data
  $('#author-data').text(author.authorHTML);
}

function getBooks() {
  //load/iterate through all books-with map
  //access via author id
  //load in id=books-data
  $('#books-data').text(author.booksHTML);
}

function resetPage() {
  $('.placeholders').text('');
}

class Author {
	constructor(obj) {
		this.id = obj.id
		this.name = obj.name
		this.books = obj.books
	}

	static newAuthor() { //static so called on class itself instead of instance
    //needs to be plain html, not erb tags in order to display properly
    //check that works to create new author
		return (`
		<h2>Create New Author:</h2>
    <form>
      <input id='author-name' type='text' name='name'></input><br>
      <input type='submit' />
    </form>
		`)
	}

  static allAuthors() {
    return (`
  			all authors
        buttons for each author
  	`)
  }
}

Author.prototype.authorHTML = function() { //prototype to avoid repetition/extra data
  // author show
  // author name
  //create button for getBooks here!
  //load in id=author-data
  return (`
			<h1>${this.name}</h1>
      button for books
	`)
}

Author.prototype.booksHTML = function() { //prototype to avoid repetition/extra data
  // author show
  // author name
  //create button for getBooks here!
  //load in id=author-data
  return (`
			books
	`)
}
