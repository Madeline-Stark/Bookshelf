module BooksHelper
  def author_id_field(book)
    if book.author.nil?
      select_tag "book[author_id]", options_from_collection_for_select(Author.all, :id, :name)
    else
      hidden_field_tag "book[author_id]", book.author_id
    end
  end
end
