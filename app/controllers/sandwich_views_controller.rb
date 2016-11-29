class SandwichViewsController < ApplicationController
	before_action :authenticate_user!
	
	def index
		@sandwichesa = Sandwich.all
		render "index"
	end

	def show
		@thesandwich = Sandwich.find(params[:id])
		@theIngredients = Ingredient.all
		render "show"
	end

end
