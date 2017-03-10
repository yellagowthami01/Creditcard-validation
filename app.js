

angular.module('app', []);

angular.module('app').controller
  ( 'MainCtrl'
  , function($scope,$locale) {
      $scope.currentYear = new Date().getFullYear()
      $scope.currentMonth = new Date().getMonth() + 1
      $scope.months = $locale.DATETIME_FORMATS.MONTH
      $scope.ccinfo = {type:undefined}
      $scope.save = function(data){
        if ($scope.paymentForm.$valid){
          console.log(data) // valid data saving stuff here
        }
      }
    }
  )





