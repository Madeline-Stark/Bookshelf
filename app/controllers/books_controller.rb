class BooksController < ApplicationController
  before_action :require_logged_in

    def index
      @books = Book.all
    end

    def show
      @book = Book.find_by_id(params[:id])
    end

    def new
      @book = Book.new
    end

    def create
      @book = Book.create(book_params)
      #@author.books << @book
      redirect_to book_path(@book)
    end

    def edit
      @book = Book.find_by_id(params[:id])
    end

    def update
      @book = Book.find_by_id(params[:id])
      @book.update(book_params)
      if @book.save
        redirect_to book_path
      else
        render :edit
      end
    end

    private

    def book_params
      params.require(:book).permit(:title, :genre, :page_count, :author)
    end

end
