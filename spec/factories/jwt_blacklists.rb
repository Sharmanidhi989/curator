FactoryBot.define do
  factory :jwt_blacklist do
    jti { "MyString" }
    exp { "2020-09-13 22:58:16" }
  end
end
