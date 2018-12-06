class UserBooksController < ApplicationController

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

  private

  def user_book_params
    params.require(:user_book).permit(:finished)
  end


end
