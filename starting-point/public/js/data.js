

var dataModule = (function () {

  var publicAPI = {

    hotelsPromise: $.ajax({
      method: 'GET',
      url: '/api/hotels'
    }),

    restaurantsPromise: $.ajax({
      method: 'GET',
      url: '/api/restaurants'
    }),

    dayPostPromiseCreator: function(number){
      return $.ajax({
        data: {number},
        method: 'POST',
        url: '/api/days'
      })
    },

    dayPostHotelPromiseCreator: function(hotelId){
      console.log("day post hotel promise creator this.id", this)
      var url = '/api/days/' + this.id + '/hotels';
      return $.ajax({
        data: {hotelId},
        method: 'POST',
        url: url
      })
    },

    dayGetPromise: $.ajax({
      method: 'GET',
      url: '/api/days'
    }),

    activitiesPromise: $.ajax({
      method: 'GET',
      url: '/api/activities'
    })

  };

  return publicAPI;

}());
