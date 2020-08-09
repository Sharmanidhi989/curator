class Book < ApplicationRecord
  has_many :reviews
  has_one_attached :image

  validates :name, presence: true, uniqueness: true

  before_create :slugify

  def avg_score
    reviews.average(:score).round(2).to_f
  end

  private

  def slugify
    self.slug = name.parameterize
  end
end
