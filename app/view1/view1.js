'use strict';
angular.module('myApp.view1', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/view1', {
            templateUrl: 'view1/view1.html',
            controller: 'View1Ctrl'
        });
    }])
    .controller('View1Ctrl', ['$http', function ($http) {
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
