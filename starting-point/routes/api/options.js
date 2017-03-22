var Sequelize = require('sequelize')
var router = require('express').Router();
var Hotel = require('../../models/hotel');
var Restaurant = require('../../models/restaurant');
var Activity = require('../../models/activity');


router.get('/hotels', function(req, res, next){
  console.log('????');
  Hotel.findAll().then(
    function(array){
      console.log('got here!')
      res.status(200).json(array)
    }
  ).catch(next)



})


router.get('/restaurants', function(req, res, next){
  Restaurant.findAll().then(
    function(array){
      res.status(200).json(array)
    }
  ).catch(next)



})


router.get('/activities', function(req, res, next){
  Activity.findAll().then(
    function(array){
      res.status(200).json(array)
    }
  ).catch(next)



})


module.exports = router
