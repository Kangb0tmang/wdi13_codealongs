class TipsController < ApplicationController
  # Create
  def new
  end

  def create
    tip = Tip.new
    tip.title = params[:title]
    tip.content = params[:content]
    tip.save
    redirect_to '/tips'
  end

  # Read
  def show
    @tip = Tip.find(params[:id])
    markdown = Redcarpet::Markdown.new(Redcarpet::Render::HTML)
    @content_html = markdown.render(@tip.content)
    # render:show same as erb: show (OPTIONAL)
    @comments = @tip.comments
    @tags = @tip.tags
  end

  def index
    @tips = Tip.all
  end

  # Update
  def edit
    @tip = Tip.find(params[:id])
  end

  def update
    tip = Tip.find(params[:id])
    tip.title = params[:title]
    tip.content = params[:content]
    tip.save
    redirect_to "/tips/#{tip.id}"
  end

  # Delete
  def confirm_delete
    @tip = Tip.find(params[:id])
  end

  def destroy
    @tip = Tip.find(params[:id])
    @tip.destroy
    redirect_to '/tips'
  end
end
