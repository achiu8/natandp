class AddDefaultPlusOnes < ActiveRecord::Migration
  def up
    change_column_default :guests, :plus_ones, 0
  end

  def down
    change_column_default :guests, :plus_ones, nil
  end
end
