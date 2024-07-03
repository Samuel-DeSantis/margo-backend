class AddConduitIdToCables < ActiveRecord::Migration[7.0]
  def change
    add_column :cables, :conduit_id, :integer
  end
end
