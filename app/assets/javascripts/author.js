

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
    	getAuthor()
    })

  $('button#books').on('click', function (event) {
      event.preventDefault()
      getBook()
    })

    $('button#newAuthor').on('click', function(event) {
      //prevent form from submitting the default way
      event.preventDefault();
      let newAuthorForm = Author.newAuthor();
      $('#new-author-data').text(newAuthorForm);
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
  let authorsText = 'all the html'
  $('#authors-data').text(authorsText);
}

function getAuthor() {
  //load author based on id, using jquery-look at tic tac toe
  //call prototype here
  //load in id=author-data
  let authorText = 'all the html'
  $('#author-data').text(authorText);
}

function getBooks() {
  //load/iterate through all books-with map
  //access via author id
  //load in id=books-data
  let booksText = 'all the html'
  $('#books-data').text(booksText);
}

function resetPage() {
  $('div').text('');
}

class Author {
	constructor(obj) {
		this.id = obj.id
		this.name = obj.name
		this.books = obj.books
	}

	static newAuthor() { //static so called on class itself instead of instance
    //displaying literally!
    //check that works to create new author
		return (`
		<h2>Create New Author:</h2>
        <%= form_for(@author) do |f| %>
        <%= f.label :name %><br>
        <%= f.text_field :name %>
        <%= f.submit %>
    <% end %>
		`)
	}
}

Author.prototype.authorHTML = function() { //prototype to avoid repetition/extra data
  // author show
  // author name
  //create button for getBooks here!
  //load in id=author-data
}
