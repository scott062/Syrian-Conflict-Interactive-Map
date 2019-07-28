json.type "FeatureCollection"
json.set! "features" do
  json.array! @conflicts do |conflict|
    json.type "Feature"
    json.set! "properties" do
      json.id conflict["data_id"]
      json.region conflict["region"]
      json.notes conflict["notes"]
      json.fatalities conflict["fatalities"]
    end
    json.set! "geometry" do
      json.type "Point"
      json.coordinates [conflict["longitude"], conflict["latitude"]]
    end
  end
end
