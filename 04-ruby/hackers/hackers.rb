# hackers
#    |
#    | -- jon
#          | -- README.md
#    | -- ryan_s
#          | -- README.md

require 'pry'
require 'fileutils'

hackers = ['Ariel', 'Darryl', 'Fiona', 'Hsing', 'Jessica', 'Jon', 'Lyle', 'Pauline', 'Ryan M', 'Ryan S', 'Sidhra', 'Trystan', 'Wendy']

puts 'end of program'
binding.pry

# /s (special characters)
# + and a space
hackers.each do |hacker|
   puts hacker.downcase.gsub(/\s+/, '_')
end

# hackers.each do |hacker|
#
#    folder_name = hacker.downcase.gsub(/\s+/, '_')
#
#    FileUtils.mkdir(folder_name)
#
#    FileUtils.cd(folder_name) do
#       FileUtils.touch('README.md')
#    end
# end
