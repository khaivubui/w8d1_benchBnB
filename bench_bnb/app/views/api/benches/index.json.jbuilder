# json.array! @benches do |bench|
#   json.extract! bench, :id, :description, :lat, :lng
# end

@benches.each do |bench|
  json.set! bench.id do
    json.extract! bench, :id, :description, :lat, :lng
  end
end
