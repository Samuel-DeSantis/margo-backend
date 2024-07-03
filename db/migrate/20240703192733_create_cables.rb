class CreateCables < ActiveRecord::Migration[7.0]
  def change
    create_table :cables do |t|
      t.string :tag

      t.timestamps
    end
  end
end
