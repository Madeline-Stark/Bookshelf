

$(document).ready(function() {
  attachListeners();
});

function attachListeners() {

    getAuthors();
    getAuthor();
    newAuthor();

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
  		url: location.href,
  		method: 'get',
  		dataType: 'json',
  		success: function (data) {
        const renderedAuthor = new Author(data);
        document.getElementById('author-data').innerHTML = renderedAuthor.authorHTML();
  		}
  	})
  })
}


function newAuthor() {
  $(function () {
    $('new-author').submit(function(event) {
      event.preventDefault();
      const values = $(this).serialize();

      const posting = $.post('/authors', values);

      posting.done(function(data) {
        const author = new Author(data);
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

  static allAuthors(authors) {
    const authorDivs = authors.map(author =>{
      return(
        `<div><a href='authors/${author.id}'>${author.name}</a><div>`
      )
    }).join('') //without join has commas!
    return authorDivs;
  }

}

Author.prototype.authorHTML = function () {
  const authorBooks = this.books.map(book => {
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

//test change
