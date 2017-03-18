angular.module('app', ['ngRoute'])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/', {
    templateUrl: 'public/main.html',
    controller: 'CartCtrl'
  })
    .when('/cart', {
    templateUrl: 'public/cart/cart.html',
    controller: 'CartCtrl'
  })  .otherwise({
        redirectTo: '/cart'
    })
}]);
