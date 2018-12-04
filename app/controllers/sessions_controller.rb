class SessionsController < ApplicationController
  def new
    @user = User.new
  end

  def create
    if auth['uid']
      @user = User.find_or_create_by(uid: auth['uid']) do |u|
        u.name = auth['info']['name']
        u.email = auth['info']['email']
        u.image = auth['info']['image']
      end
      session[:user_id] = @user.id
      redirect_to user_path(@user)
    elsif @user = User.find_by(email: params[:user][:email])
      if !@user.authenticate(params[:user][:password])
          redirect_to login_path
      else
        session[:user_id] = @user.id
        redirect_to user_path(@user)
      end
    end
  end

  def destroy
    session.delete :user_id
    redirect_to root_path
  end

  private

  def auth
    request.env['omniauth.auth']
  end

end
