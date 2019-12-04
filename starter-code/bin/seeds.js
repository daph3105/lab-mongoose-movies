const mongoose = require('mongoose');
const Movie = require('../models/Movie');

const movies = [
    {
      title : "A Wrinkle in Time",
      genre: "Adventure",
      plot: "Following the discovery of a new form of space travel as well as Meg's father's disappearance, she, her brother, and her friend must join three magical beings - Mrs. Whatsit, Mrs. Who, and Mrs. Which - to travel across the universe to rescue him from a terrible evil.",
    },
    {
      title : "The Strangers: Prey at Night",
      genre: "Horror",
      plot: "A family's road trip takes a dangerous turn when they arrive at a secluded mobile home park to stay with some relatives and find it mysteriously deserted. Under the cover of darkness, three masked psychopaths pay them a visit to test the family's every limit as they struggle to survive.",
    },
    {
      title : "The Hurricane Heist",
      genre: "Thriller",
      plot: "Thieves attempt a massive heist against the U.S. Treasury as a Category 5 hurricane approaches one of its Mint facilities.",
    },
    {
      title : "Gringo",
      genre: "Action",
      plot: "GRINGO, a dark comedy mixed with white-knuckle action and dramatic intrigue, explores the battle of survival for businessman Harold Soyinka (David Oyelowo) when he finds himself crossing the line from law-abiding citizen to wanted criminal.",
    },
    {
      title : "Thoroughbreds",
      genre: "Drama",
      plot: "Two upper-class teenage girls in suburban Connecticut rekindle their unlikely friendship after years of growing apart. Together, they hatch a plan to solve both of their problems-no matter what the cost.",
    },
    {
      title : "The Leisure Seeker",
      genre: "Romance",
      plot: "A runaway couple goes on an unforgettable journey in the faithful old RV they call The Leisure Seeker, traveling from Boston to The Ernest Hemingway Home in Key West. They recapture their passion for life and their love for each other on a road trip that provides revelation and surprise right up to the very end.",
    },
    {
      title : "Black Panther",
      genre: "Action",
      plot: "T'Challa, the King of Wakanda, rises to the throne in the isolated, technologically advanced African nation, but his claim is challenged by a vengeful outsider who was a childhood victim of T'Challa's father's mistake.",
    },
    {
      title : "Red Sparrow",
      genre: "Action",
      plot: "Ballerina Dominika Egorova is recruited to 'Sparrow School,' a Russian intelligence service where she is forced to use her body as a weapon. Her first mission, targeting a C.I.A. agent, threatens to unravel the security of both nations.",
    }
  ];

  mongoose
  .connect('mongodb://localhost/starter-code', {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });


Movie.insertMany(movies).then(res => {
  console.log(res);
  mongoose.connection.close();
})