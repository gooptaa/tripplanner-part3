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



module.exports = router;
