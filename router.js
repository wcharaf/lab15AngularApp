var app = angular.module('myModule', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
    .when('/catpage',
    {
      controller: 'displayController',
      templateUrl: 'dogpage.html'
    })
    .when('/dogpage',
  {
    controller: 'formController',
    templateUrl: 'catpage.html'
  })
    .otherwise({redirectTo: '/'});
});
