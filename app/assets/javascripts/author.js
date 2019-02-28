

$(document).ready(function() {
  attachListeners();
});

function attachListeners() {

    getAuthors();
    getAuthor();
    newAuthor();
    getSortedAuthors();

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

function getSortedAuthors() {
  $('#sort-authors').on('click', function(event) {
    event.preventDefault();
    $.ajax({
  		url: 'http://localhost:3000/authors',
  		method: 'get',
  		dataType: 'json',
  		success: function (data) {
        const authorsHTML = Author.sortAuthors(data);
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
    $('#new-author').submit(function(event) {
        console.log('event is:', event)
      event.preventDefault();
      console.log(this)
      const values = $(this).serialize(); //need jquery object in order to access
      debugger
      const posting = $.post('/authors', values, null, 'json'); //null is placeholder for success
      posting.done(function(data) {
        const author = new Author(data);
        document.getElementById('returned-author').innerHTML = `<p> ${author.name} </p>`
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

  static sortAuthors(authors) {
    const sortedAuthors = authors.sort(function(a, b) {
      const nameA = a.name.toUpperCase(); // ignore upper and lowercase
      const nameB = b.name.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }

  // names must be equal
  return 0;
});
    const authorDivs = sortedAuthors.map(author =>{
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
