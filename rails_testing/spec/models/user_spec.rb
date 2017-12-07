describe User do
  it 'must have a first name' do
    user = User.new(first_name: 'mike')
    expect(user.first_name).to eq 'mike'
  end

  it 'is invalid when password is less than 8 characters' do
    user = User.new(password: 'cake')
    expect(user).to_not be_valid
  end

  it 'can have many tweets' do
    tweet1 = Tweet.new(message: 'i need a horse')
    tweet2 = Tweet.new(message: 'i like this stuff. another!')
    user = User.new(first_name: 'thor', tweets: [tweet1, tweet2])
    expect(user.tweets).to include(tweet1)
  end
end
