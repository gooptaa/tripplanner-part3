const Sequelize = require('sequelize')
const db = require('./_db');
const Hotel = db.model('hotel')
const Restaurant = db.model('restaurant')
const Activity = db.model('activity')



const Day = db.define('day', {

number: {
  type: Sequelize.INTEGER,
  defaultValue: function(){ return this.id},
  allowNull: false
}




})




module.exports = Day
