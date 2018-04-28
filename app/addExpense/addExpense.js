'use strict';

angular.module('myApp.addExpense', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/addExpense', {
            templateUrl: 'addExpense/addExpense.html',
            controller: 'addExpenseCtrl'
        });
    }])

    .controller('addExpenseCtrl', ['$http', function ($http) {
        var URL = 'http://localhost:8080';
        var self = this;
        this.formExpense = {
            'name': '',
            'cost': '',
            'description': ''
        };

        this.sendToBackend = function () {
            $http.post(URL + "/expense/add-expense", self.formExpense)
                .then(function (data) {
                    console.log(data);
                }, function (data) {
                    console.log(data);
                });
        };
    }]);