

$(document).ready(function() {
  attachListeners();
});

function attachListeners() {

    getAuthors();
    getAuthor();

    $('button#newAuthor').on('click', function(event) {
      //prevent form from submitting the default way
      event.preventDefault();
      let newAuthorForm = Author.newAuthorForm();
      document.querySelector('#new-author-data').innerHTML = newAuthorForm
      //how to post data from here?
    });

  $('button#clear').on('click', function (event) {
    event.preventDefault()
    resetPage()
  })
}

function getAuthors() {
  $('#authors').on('click', function(event) {
    event.preventDefault();
    $.ajax({
  		url: 'http://localhost:3000/authors',
  		method: 'get',
  		dataType: 'json',
  		success: function (data) {
  			console.log("the data is: ", data)
        const authorsHTML = Author.allAuthors(data);
        document.getElementById('authors-data').innerHTML = authorsHTML;
  		}
  	})
  })
}

function getAuthor() {
  $('#author').on('click', function(event) {
    event.preventDefault();
    $.ajax({
  		url: 'http://localhost:3000/authors/1', //+ event.id, //not sure if this is right
  		method: 'get',
  		dataType: 'json',
  		success: function (data) {
  			console.log("the data is: ", data);
        let renderedAuthor = new Author(data);
        document.getElementById('author-data').innerHTML = renderedAuthor.authorHTML();
  		}
  	})
  })
}

function newAuthor() {
  $(function () {
    $('new-author').submit(function(event) {
      //prevent form from submitting the default way
      event.preventDefault();
      var values = $(this).serialize();

      var posting = $.post('/authors', values);

      posting.done(function(data) {
        var author = new Author(data);
        $("#authorResult").text(author["name"]);
      });
    });
  });
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

	static newAuthorForm() { //static so called on class itself instead of instance
    //needs to be plain html, not erb tags in order to display properly
    //check that works to create new author
    resetPage();
		return (`
		<h2>Create New Author:</h2>
    <form>
      Name: <input id='author-name' type='text' name='name'></input><br>
      <input type='submit' />
    </form>
		`)
	}

  static allAuthors(authors) {
    let authorDivs = authors.map(author =>{
      return(
        `<div><a href='authors/${author.id}'>${author.name}</a><div>`
      )
    }).join('') //without join has commas!
    return authorDivs;
  }
}

Author.prototype.authorHTML = function () {
  let authorBooks = this.books.map(book => {
  	return (`
  		<li><a href='http://localhost:3000/books/${book.id}'>${book.title}</a></li>
  	`)
  }).join('')

  return (`
  		<h3>${this.name}</h3>
      <p>Books:</p>
  		<ul>${authorBooks}</ul>
  `)
}
