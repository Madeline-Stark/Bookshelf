class UsersController < ApplicationController
  before_action :require_logged_in, only: :show

  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)
    if @user.save
      session[:user_id] = @user.id
      redirect_to user_path(@user)
    else
      render :new
    end
  end

  def show
    @user = User.find_by_id(params[:id])
    @books = @user.books
    @read_books = @user.user_books.read
    @unread_books = @user.user_books.unread
  end


  private

  def user_params
    params.require(:user).permit(:name, :email, :password, :uid, :image)
  end
end
