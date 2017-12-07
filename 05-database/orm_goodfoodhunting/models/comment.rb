class Comment < ActiveRecord::Base
   # singular
   belongs_to :user

   # def user_email
   #    if self.user_id
   #       User.find(self.user_id).email
   #    else
   #       ''
   #    end
   # end

end
