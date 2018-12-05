class BooksController < ApplicationController
  before_action :require_logged_in

    def index
      if params[:author_id]
        @books = Author.find(params[:author_id]).books
      else
        @books = Book.all
      end
    end

    def show
      @book = Book.find_by_id(params[:id])
      @author = @book.author
    end

    def new
      if params[:author_id] && !Author.exists?(params[:author_id])
        redirect_to authors_path, alert: "No such author."
      else
        @book = Book.new(author_id: params[:author_id])
        @book.users_books.build
      end
    end

    def create
      @book = Book.new(book_params)

      if @book.save
        @user = current_user
        @user.books << @book
        @user.save
        #need to save users_books? hidden_field in form?
        redirect_to book_path(@book)
      else
        render :new
      end
    end

    def edit
      if params[:author_id]
        author = Author.find_by(id: params[:author_id])
        if author.nil?
          redirect_to authors_path, alert: "No such author."
        else
          @book = author.books.find_by(id: params[:id])
          redirect_to author_books_path(author), alert: "No such book." if @book.nil?
        end
      else
        @book = Book.find(params[:id])
      end
    end

    def update
      @book = Book.find_by_id(params[:id])
      @book.update(book_params)
      if @book.save
        redirect_to book_path(@book)
      else
        render :edit
      end
    end

    private

    def book_params
      params.require(:book).permit(:title, :genre, :page_count, :author_id, {user_books_attributes: [:finished, :user_id, :book_id]})
    end

end
