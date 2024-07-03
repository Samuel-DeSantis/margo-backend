class ConduitsController < ApplicationController

  before_action :set_conduit, only: [:show, :update, :destroy]

  def index
    render json: Conduit.all
  end

  def show
    render json: @conduit
  end

  def destroy
    @conduit.destroy
  end

  private

  def set_conduit
    @conduit = Conduit.find_by_id(params[:id])
  end

  def conduit_params
    params.require(:conduit).permit(:tag, :size, :to, :from, :project_id)
  end

end
