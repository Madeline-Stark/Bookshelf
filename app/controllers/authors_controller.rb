class AuthorsController < ApplicationController
  before_action :require_logged_in
  before_action :set_author, only: [:show, :edit, :update]

  def show
    respond_to do |f|
			f.html {render :show}
			f.json {render json: @author }
		end
  end

  def index
    @authors = Author.all
    respond_to do |f|
			f.html {render :index}
			f.json {render json: @authors}
		end
  end

  def new
    @author = Author.new
  end

  def create
    @author = Author.new(author_params)

    if @author.save
      respond_to do |f|
				f.html {redirect_to author_path}
				f.json {render json: @author}
      end
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
