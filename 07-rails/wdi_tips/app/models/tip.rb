class Tip < ApplicationRecord
  has_many :comments
  has_many :taggings
  has_many :tags, through: :taggings

  def tags_list
    tag_arr = []
    tags.each do |tag|
      tag_arr.push(tag.name)
    end
    tag_arr.join(', ')
  end
end
