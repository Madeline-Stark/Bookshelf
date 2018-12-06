class UserBooksController < ApplicationController

  def index
    @user_books = UserBook.all
  end

  def new

  end

  def create

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
