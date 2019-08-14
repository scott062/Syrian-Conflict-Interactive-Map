class Api::ConflictsController < ApplicationController

  def index
    conflicts = AcledService.new
    @conflicts = conflicts.get_conflict_by_country("syria")
    get_actors_list(@conflicts)
  end

  def get_actors_list(data)
    actors = data.map { |conflict| conflict['actor1'] }
    @actors = actors.uniq
  end
end
