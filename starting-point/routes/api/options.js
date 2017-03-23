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
  Day.create(req.body)
  .then(function(){
    res.sendStatus(200)
  })
  .catch(next)
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
    foundDay.addRestaurant(req.body)
  })
  .catch(next)
})

router.post('/days/:id/hotels', function(req, res, next){
  Day.findById(req.params.id)
  .then(function(foundDay){
    foundDay.update({
      hotelId: req.body.id
    })
  })
  .catch(next)
})

router.post('/days/:id/activities', function(req, res, next){
  Day.findById(req.params.id)
  .then(function(foundDay){
    foundDay.addActivity(req.body)
  })
  .catch(next)
})

module.exports = router;
