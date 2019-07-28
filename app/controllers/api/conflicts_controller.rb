class Api::ConflictsController < ApplicationController

  def index
    conflicts = AcledService.new
    @conflicts = conflicts.get_conflict_by_country("syria")
  end
  
end
