class AddProjectIdToConduits < ActiveRecord::Migration[7.0]
  def change
    add_column :conduits, :project_id, :integer
  end
end
