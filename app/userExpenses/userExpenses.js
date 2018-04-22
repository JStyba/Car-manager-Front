'use strict';
angular.module('myApp.userExpenses', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/userExpenses', {
            templateUrl: 'userExpenses/userExpenses.html',
            controller: 'UserExpensesCtrl'
        });
    }])
    .controller('UserExpensesCtrl', ['$http', function ($http) {
        var URL = 'http://localhost:8080/';
        var self =this;
        this.userExpenses = [];
        this.fetchExpenses = function () {
            $http.get(URL + 'expenses/listexpenses')
                .then(
                    function (data) {
                        console.log(data);
                        var expenses = data.data;
                        self.userExpenses = [];
                        for(var index in expenses){
                            console.log(expenses[index])
                            self.userExpenses.push(expenses[index])
                        }
                    },
                    function () {
                        console.log("error");
                    }
                );
        };
        self.fetchExpenses();
    }]);