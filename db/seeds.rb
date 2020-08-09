# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).

books = Book.create(
  [
    {
      name: "Gitanjali"
    },
    {
      name: "Moby Dick"
    },
    {
      name: "The Sun Also Rises"
    },
    {
      name: "Gone with the wind"
    },
    {
      name: "Oliver Twist"
    },
    { 
      name: "Crime and Punishment"
    }
  ]
)

Review.create(
  [
    {
      title: "Amazing Book",
      description: "One of the most mesmerising works of Tagore",
      score: 4,
      book: books.first
    },
    {
      title: "Beautiful Book",
      description: "Can read it over and over again...",
      score: 5,
      book: books.first
    }
  ]
)
