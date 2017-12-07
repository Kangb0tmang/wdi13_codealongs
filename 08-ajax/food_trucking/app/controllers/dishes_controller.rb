class DishesController < ApplicationController
  def new
    @dish = Dish.new
  end

  def create
    dish = Dish.new
    dish.name = params[:name]
    dish.image = params[:dish][:image]
    dish.save
    redirect_to '/dishes'
  end

  def index
    @dishes = Dish.all
  end

  def show
    @dish = Dish.find(params[:id])
  end
end
