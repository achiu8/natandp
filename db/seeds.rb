25.times do
  Guest.create(
    first_name: Faker::Name.first_name,
    last_name: Faker::Name.last_name,
    plus_ones: rand(5),
    phone: Faker::PhoneNumber.phone_number,
    email: Faker::Internet.email,
    attending: Guest::ATTENDING_VALUES.sample,
  )
end
