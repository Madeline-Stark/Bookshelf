
// * prototypes-research-maybe just capitalize? or change first name to initial?
// * loadAuthors
// * loadAuthor
// * loadBooks

$(document).ready(function() {
  attachListeners();
});

function attachListeners() {

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
