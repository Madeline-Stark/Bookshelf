class AuthorsController < ApplicationController
  before_action :require_logged_in

  def show
    @author = Author.find(params[:id])
  end

  def index
    @authors = Author.all
  end

  def new
    @author = Author.new
  end

  def create
    @author = Author.create(author_params)
    redirect_to author_path(@author)
  end

  def edit
    @author = Author.find(params[:id])
  end

  def update
    @author = Author.find_by_id(params[:id])
    @author.update(author_params)
    if @author.save
      redirect_to author_path(@author)
    else
      render :edit
    end
  end

  private

  def author_params
    params.require(:author).permit(:name)
  end

end
