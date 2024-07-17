class CablesController < ApplicationController

  before_action :set_cable, only: [:show, :update, :destroy]

  def index
    render json: Cable.all
  end

  def show
    render json: @cable
  end

  def create
    @cable = Cable.create(cable_params)
    render json: @cable
  end

  def update
    @cable.update(cable_params)
    render json: @cable
  end

  def destroy
    @cable.destroy
  end

  private

  def set_cable
    @cable = Cable.find_by_id(params[:id])
  end

  def cable_params
    params.require(:cable).permit(:tag, :conduit_id)
  end

end
