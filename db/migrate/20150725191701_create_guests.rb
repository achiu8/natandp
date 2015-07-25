class CreateGuests < ActiveRecord::Migration
  def change
    create_table :guests do |t|
      t.string :first_name
      t.string :last_name
      t.integer :plus_ones
      t.string :phone
      t.string :email
      t.string :attending

      t.timestamps null: false
    end
  end
end
