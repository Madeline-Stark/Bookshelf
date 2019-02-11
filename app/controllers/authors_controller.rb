class AuthorsController < ApplicationController
  before_action :require_logged_in
  before_action :set_author, only: [:show, :edit, :update]

  def show
    render json: @author, status: 200
  end

  def index
    @authors = Author.all
    render json: @authors, status: 200
  end

  def new
    @author = Author.new
  end

  def create
    @author = Author.new(author_params)

    if @author.save
      render json: @author, status: 201
    else
      render :new
    end
  end

  def edit
  end

  def update
    @author.update(author_params)
    if @author.save
      redirect_to author_path(@author)
    else
      render :edit
    end
  end

  private

  def set_author
    @author = Author.find_by_id(params[:id])
  end

  def author_params
    params.require(:author).permit(:name)
  end

end
