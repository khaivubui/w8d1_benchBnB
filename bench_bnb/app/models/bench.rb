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
    self.all.map do |bench|
      bench.lat >= bounds.southWest.lat &&
      bench.lat <= bounds.northEast.lat &&
      bench.lng >= bounds.southWest.lng &&
      bench.lng <= bounds.northEast.lng
    end
  end
end
