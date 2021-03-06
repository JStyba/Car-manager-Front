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
]).config(['$locationProvider', '$routeProvider',
    function ($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');

        $routeProvider.otherwise({redirectTo: '/main'});

    }]).run(function ($rootScope, AuthService, $window, $http) {

    if (AuthService.logged === '') { // nie zalogowany
        var token = $window.sessionStorage.getItem('token');
        var user_id = $window.sessionStorage.getItem('user_id');

        if (token != null) {
            $http.defaults.headers.common['Authorization'] = 'Bearer ' + token;
            AuthService.loggedInUser.id = user_id;
            AuthService.logged = user_id;
        }
    }
    AuthService.logged = null;
});