var db = require('./_db');

var Place = require('./place');
var Hotel = require('./hotel');
var Restaurant = require('./restaurant');
var Activity = require('./activity');
var Day = require('./day')



Hotel.belongsTo(Place);
Restaurant.belongsTo(Place);
Activity.belongsTo(Place);

Day.belongsTo(Hotel)
Restaurant.belongsToMany(Day, { through: 'restaurant-days' })
Day.belongsToMany(Restaurant, {through: 'restaurant-days'})
Activity.belongsToMany(Day, {through: 'activity-days' })
Day.belongsToMany(Activity, {through: 'activity-days'})


module.exports = db;
