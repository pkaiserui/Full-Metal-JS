angular.module('tinnr.meals', [])
  .controller('MealsController', function ($scope, Meals) {
    $scope.meals = Meals.list;

  	$scope.getMeals = function () {
  		Meals.getSavedMeals()
  			.then(function (data) {
  				$scope.meals.list = data;
  			})
  			.catch(function (error) {
  				console.error('Error fetching meals: ', error);
  			});
  	}

    $scope.getMealsServer = function(){
      console.log("get meals is happening")
      Meals.getSavedMeals()
        .then(function (data){
          console.log("data is coming",data)
          $scope.meals.list = data;
        })
        .catch(function (error){
          console.log('Error fetching meals', error);
        });
    }

  });