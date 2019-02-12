

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

  $('button#newAuthor').on('click', function (event) {
    event.preventDefault()
    newAuthorForm()
  })

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
}

function getAuthor() {
  //load author based on id, using jquery-look at tic tac toe
  //call prototype here
  //load in id=author-data
}

function getBooks() {
  //load/iterate through all books-with map
  //access via author id
  //load in id=books-data
}

function newAuthorForm() {
  //need script tags?
  Author.newAuthor();
  $(function () {
   $('form').submit(function(event) {
     //prevent form from submitting the default way
     event.preventDefault();
     var values = $(this).serialize();
     var posting = $.post('/authors', values);
     posting.done(function(data) {
        var author = data;
        $('#new-author-data').text(author["name"]);
      });
   });
 });
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
    //reread lab for forms
    //check that works to create new author
		return (`
		<h2>Create New Author:</h2>
        <%= form_for(@author) do |f| %>
    <div class="field">
      <%= f.label :name %><br>
      <%= f.text_field :name %>
    </div>
    <div class="actions">
      <%= f.submit %>
    </div>
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
