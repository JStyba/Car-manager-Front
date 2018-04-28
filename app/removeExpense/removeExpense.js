'use strict';
angular.module('myApp.removeExpense', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('removeExpense', {
            templateUrl: 'removeExpense/remove-expense.html',
            controller: 'removeExpenseCtrl'
        });
    }])
    .controller('removeExpenseCtrl', ['$http', function ($http) {
        var URL = 'http://localhost:8080/';
        var self = this;


        this.removeExpense = function (expenseId) {

            $http.delete(URL + 'expenses/remove-expense/{'+ expenseId +'}')

        },
            function () {
                console.log("error");
            };

    }])
;
