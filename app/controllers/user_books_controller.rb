class UserBooksController < ApplicationController
  before_action :require_logged_in


  def new
    @books = Book.order("title")
  end

  def create
    @book = Book.find_by_id(params["user_books"]["book_id"])
    current_user.books << @book
    current_user.save
    @user_book = current_user.user_books.last
    @user_book.finished = params["user_books"]["finished"]
    @user_book.save
    redirect_to user_path(current_user)
  end

  def edit
    @user = current_user
    @user_book = UserBook.find_by(id: params[:id])
  end

  def update
    @user_book = UserBook.find_by(id: params[:id])
    @user_book.update(user_book_params)
    if @user_book.save
      redirect_to user_path(current_user)
    else
      render :edit
    end
  end

  def destroy
    @user_book = UserBook.find_by(id: params[:id])
    @user_book.destroy
    redirect_to user_path(current_user)
  end

  private

  def user_book_params
    params.require(:user_book).permit(:finished)
  end


end
