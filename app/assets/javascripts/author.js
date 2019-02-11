

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

}

function getAuthor() {

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
		return (`
		<strong>New artist form</strong>
			<form>
				<input id='post-name' type='text' name='name'></input><br>
				<input type='submit' />
			</form>
		`)
	}
}
