angular.module('tinnr.mealsServices', [])
  .factory('Meals', function($http) {
    var meals = {};

    meals.list = [];

    /// These first two work
    meals.getAll = function(){
    	return meals.list;
    }

    meals.saveMeal = function (meal) {
      meals.list.push(meal);
    };


    meals.getSavedMeals = function(){
      return $http({
        method: 'GET',
        url: '/api/users/getSavedMeals'
      })
      .then(function (res) {
        return res.data;
      }, function (res) {
        console.error('Error: ', res);
      });
    }

    meals.saveMealServer = function(meal){
      $http({
        method: 'POST',
        url: '/api/users/getSavedMeals',
        data: meal
      })
      .then(function (resp) {
        /*
        if (resp.data.token) {
          auth.setCurrentUser(user.username, resp.data.token);
        }
        */
        return resp.data.token;
      });

    }

    return meals; 
  });