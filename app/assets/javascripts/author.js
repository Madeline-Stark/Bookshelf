

$(document).ready(function() {
  attachListeners();
});

function attachListeners() {
  $('button#authors-data').on('click', function (event) {
  		event.preventDefault()
  		getAuthors()
  	})

  $('button#author-data').on('click', function (event) {
    	event.preventDefault()
    	getAuthor()
    })

  $('button#books-data').on('click', function (event) {
      event.preventDefault()
      getBook()
    })
}

function getAuthors() {
  //replace link_to with button for authors!
  //create button for getAuthor here!
}

function getAuthor() {
  //create button for getBooks here!
}

function getBooks() {

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
