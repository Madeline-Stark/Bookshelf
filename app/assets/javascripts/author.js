

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
}

function getAuthors() {
  //load/iterate through all authors-with map
  //for each button make new id-by author.id?
  //create button for getAuthor here!
  //load in id=authors-data
}

function getAuthor() {
  //load author based on id
  //author name
  //create button for getBooks here!
  //load in id=author-data
}

function getBooks() {
  //load/iterate through all books-with map
  //access via author id
  //load in id=books-data
}

class Author {
	constructor(obj) {
		this.id = obj.id
		this.name = obj.name
		this.books = obj.books
	}

	static newAuthorForm() {
    //reread lab for this
    //maybe make new Author form a button and make this a function outside of class
		return (`
		<strong>New artist form</strong>
			<form>
				<input id='post-name' type='text' name='name'></input><br>
				<input type='submit' />
			</form>
		`)
	}
}
