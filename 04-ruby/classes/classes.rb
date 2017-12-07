require 'pry'

# def robot_speak(message)
#    puts message
# end
#
# def robot_walk(distance)
#    puts "Walk #{distance} meters"
# end

class Robot
   def initialize(name)
      @name = name
      @items = []
   end

   def name
      return @name
   end

   def add_food(food)
      @items.push(food)
   end

   def change_name(new_name)
      @name = new_name
   end

   def speak(message)
      puts "#{@name} has spoken: #{message}"
   end

   def walk(distance)
      puts "#{@name} has walked #{distance} meters"
   end
end

binding.pry
