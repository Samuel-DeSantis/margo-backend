class CreateConduits < ActiveRecord::Migration[7.0]
  def change
    create_table :conduits do |t|
      t.string :tag
      t.float :size
      t.string :to
      t.string :from

      t.timestamps
    end
  end
end
