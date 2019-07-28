class AcledService

  def get_conflict_by_country(country)
    response = HTTP.get("https://api.acleddata.com/acled/read?terms=accept&country=#{country}&limit=1000").to_s
    parsed_response = JSON.parse(response)["data"]
  end

end
