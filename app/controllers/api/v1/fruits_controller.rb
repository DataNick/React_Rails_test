class Api::V1::FruitsController < ActionController::Base
  skip_before_action :verify_authenticity_token
  # the above script solves the POST 422 unprocessable entity error
  def index
    render json: Fruit.all
  end

  def create
    fruit = Fruit.create(fruit_params)
    render json: fruit
  end

  def update
    fruit =Fruit.find(params[:id])
    fruit.update_attributes(fruit_params)
    render json: fruit
  end

  def destroy
    Fruit.destroy(params[:id])
  end

  private
    def fruit_params
      params.require(:fruit).permit(:id, :name, :description)
    end
end
