# == Schema Information
#
# Table name: benches
#
#  id          :integer          not null, primary key
#  description :string           not null
#  lat         :float            not null
#  lng         :float            not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Bench < ApplicationRecord
  validates :description, :lat, :lng, presence: true

  def self.in_bounds(bounds)
    p 'AHAHAHAHAHAHA'
    p bounds
    self.all.select do |bench|
      bench.lat >= bounds['southWest']['lat'].to_f &&
      bench.lat <= bounds['northEast']['lat'].to_f &&
      bench.lng >= bounds['southWest']['lng'].to_f &&
      bench.lng <= bounds['northEast']['lng'].to_f
    end
  end
end
