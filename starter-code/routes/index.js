const express = require('express');
const router  = express.Router();
const Celebrity = require('../models/Celebrity');
const Movie = require('../models/Movie');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});



router.get('/new-celebrity', (req, res, next)=>{
  res.render('newCelebrity');
})



router.post('/create-the-celebrity', (req, res, next)=>{
  let theName = req.body.name;
  let theOccupation = req.body.occupation;
  let thePhrase = req.body.phrase;


  Celebrity.create({
    name: theName,
    occupation: theOccupation,
    catchPhrase: thePhrase
  })
  .then((response)=>{
    res.redirect('/')
  })
  .catch((err)=>{
    next(err)
  })
})


router.get('/all-celebrities', (req, res, next) => {
  Celebrity.find()
  .then((allTheCelebrities)=>{
    res.render('allCelebrities', {theCelebrities: allTheCelebrities});
      })
  .catch((err)=>{
    next(err);
  })
});




router.post('/delete/:theID', (req, res, next)=>{
  Celebrity.findByIdAndRemove(req.params.theID)
  .then(()=>{
    res.redirect('/all-celebrities');
  })
  .catch((err)=>{
    next(err)
  })

})


router.get('/edit/:theID', (req, res, next)=>{

  Celebrity.findById(req.params.theID)
  .then((theCelebrity)=>{
    console.log(theCelebrity)
    res.render('edit', {currentCelebrity: theCelebrity})

  })
  .catch((err)=>{
    next(err);
  })
})

router.post('/update', (req, res, next)=>{
  
  let id = req.body._id;
  let update = {...req.body};
  console.log(id)
 
  Celebrity.findByIdAndUpdate(id, update, {new: true})
  .then((response)=>{
    console.log(response)
    res.redirect('/all-celebrities')
  })
  .catch((err)=>{
    next(err)
  })
})



router.get('/movies', (req, res, next) => {
  Movie.find()
  .then((movies) => {
    console.log(movies)
    res.render('AllMovies', {theMovies: movies});
  })
  .catch((err)=>{
    next(err);
  })
});




router.get('/:theIdOfTheCelebrity', (req, res, next)=>{
  let id = req.params.theIdOfTheCelebrity;

  Celebrity.findById(id)
  .then((theCelebrity)=>{
    res.render('singleCelebrity', {celebrity: theCelebrity})
  })
  .catch((err)=>{
    next(err);
  })
})


module.exports = router;

