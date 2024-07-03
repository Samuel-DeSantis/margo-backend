class Project < ApplicationRecord

  has_many :conduits
  belongs_to :user

end
