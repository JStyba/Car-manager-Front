'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ngRoute',
    'myApp.authService',
    'myApp.login',
    'myApp.main',
    'myApp.userExpenses',
    'myApp.userFees',
    'myApp.addExpense',
    'myApp.view1',
    'myApp.view2',
    'myApp.version',
    'myApp.userCars',
    'myApp.addCar',
    'myApp.userRepairs',
    'myApp.addRepair',
    'myApp.addFee'
]).config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider.otherwise({redirectTo: '/main'});
}]).run(function ($rootScope,AuthService) {
    $rootScope.loggedInUser = AuthService.loggedInUser;
});