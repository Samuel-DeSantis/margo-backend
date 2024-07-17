class ProjectsController < ApplicationController

  before_action :set_project, only: [:show, :update, :destroy]

  def index
    render json: Project.all
  end

  def show
    render json: @project
  end

  def create
    @project = Project.create(project_params)
    render json: @project
  end

  def destroy
    @project.destroy
  end

  private

  def set_project
    @project = Project.find_by_id(params[:id])
  end

  def project_params
    params.require(:project).permit(:name, :user_id)
  end

end
