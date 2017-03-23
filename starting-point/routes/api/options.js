var db = require('../../models');
var Hotel = db.model('hotel');
var Restaurant = db.model('restaurant');
var Activity = db.model('activity');
var Day = db.model('day')
var router = require('express').Router();

router.get('/hotels', function (req, res, next) {
  Hotel.findAll()
  .then(function (allHotels) {
    res.json(allHotels)
  })
  .catch(next);
});

router.get('/restaurants', function (req, res, next) {
  Restaurant.findAll()
  .then(function (allRestaurants) {
    res.json(allRestaurants)
  })
  .catch(next);
});

router.get('/activities', function (req, res, next) {
  Activity.findAll()
  .then(function (allActivities) {
    res.json(allActivities)
  })
  .catch(next);
});

router.get('/days', function(req, res, next) {
  Day.findAll()
  .then(function(allDays){
    res.json(allDays)
  })
  .catch(next)
});

router.get('/days/:id', function(req, res, next){
  Day.findById(req.params.id)
  .then(function(oneDay){
    res.json(oneDay)
  })
  .catch(next)
})

router.post('/days', function(req, res, next){
  const instance = Day.build()
  console.log(instance);
  // .then(function(createdDay){
  //   console.log(createdDay, 'createdDay')
  //   res.json(createdDay)
  // })
  // .catch(next)
})

router.delete('/days/:id', function(req, res, next){
  Day.destroy({
    where: {
      id: req.params.id
    }
  })
  .catch(next)
})

router.post('/days/:id/restaurants', function(req, res, next){
  Day.findById(req.params.id)
  .then(function(foundDay){
     return foundDay.addRestaurant(req.body)
  }).then(function(foundDay){
    res.json(foundDay)
  })
  .catch(next)
})

router.post('/days/:id/hotels', function(req, res, next){
  Day.findById(req.params.id)
  .then(function(foundDay){
    return foundDay.update({
      hotelId: req.body.id
    })
  }).then(function(foundDay){
    res.json(foundDay)
  })
  .catch(next)
})

router.post('/days/:id/activities', function(req, res, next){
  Day.findById(req.params.id)
  .then(function(foundDay){
    return foundDay.addActivity(req.body)
  }).then(function(foundDay){
    res.json(foundDay)
  })
  .catch(next)
})

module.exports = router;
