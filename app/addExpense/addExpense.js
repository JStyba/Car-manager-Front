'use strict';

angular.module('myApp.addExpense', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/addExpense', {
            templateUrl: 'addExpense/addExpense.html',
            controller: 'addExpenseCtrl'
        });
    }])

    .controller('addExpenseCtrl', ['$http', '$routeParams','$rootScope', 'AuthService', function ($http, $routeParams, $rootScope, AuthService) {
        var URL = 'http://localhost:8080';
        var self = this;
        self.loggedInUser = AuthService.loggedInUser.id;
        self.carId = $routeParams.carId;
        self.encodedParam = ("/expenses/add-car-expense?carId="+self.carId+"&carOwnerId="+self.loggedInUser)
        this.formExpense = {
            'id':'',
            'name': '',
            'expenseCost': '',
            'expenseDescription': ''
        };

        this.loadExpense = function () {
            if ($routeParams.expenseId !== undefined) {
                console.log("Not undefined");
                $http.get(URL + "/expenses/get?id=" + $routeParams.expenseId)
                    .then(function (data) {
                        // document.getElementById("name").value = data.data.name;
                        // document.getElementById("cost").value = data.data.expenseCost;
                        // document.getElementById("description").value = data.data.expenseDescription;

                        self.formExpense = data.data;
                        self.editedElementId = data.data.id;
                    }, function () {

                    });
                document.getElementById("submitButton").value = "Save";
            } else {
                console.log("undefined");
            }
        };
        this.loadExpense();

        this.sendToBackend = function () {
            if (self.editedElementId === undefined) {

                $http.post(URL + self.encodedParam, self.formExpense)
                    .then(function (data) {
                        console.log(data);
                    }, function (data) {
                        console.log(data);
                    });
            } else {
                self.formExpense.id = self.editedElementId;
                $http.post (URL + "/expenses/edit-expense", self.formExpense)
                    .then (function (data) {
                        console.log(data);
                        },
                        function (data) {
                        console.log(data);
                    });
            }
        };
    }]);