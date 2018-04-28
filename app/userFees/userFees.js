'use strict';
angular.module('myApp.userFees', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/userFees', {
            templateUrl: 'userFees/userFees.html',
            controller: 'UserFeesCtrl'
        });
    }])
    .controller('UserFeesCtrl', ['$http', function ($http) {
        var URL = 'http://localhost:8080/';
        var self = this;
        this.userFees = [];
        this.fetchFees = function () {
            $http.get(URL + 'fees/listfees')
                .then(
                    function (data) {
                        console.log(data);
                        var fees = data.data;
                        self.userFees = [];
                        for (var index in fees) {
                            console.log(fees[index])
                            self.userFees.push(fees[index])
                        }
                    },
                    function () {
                        console.log("error");
                    }
                );
        };
        self.fetchFees();

        this.removeFee = function (feeId) {
            $http.delete(URL + 'fees/remove-fee/' + feeId).then(
                function (data) {
                    console.log(data);
                },
                function (data) {
                    console.log("Error: " + data);
                }
            );
        };
        this.addFee = function (feeId) {
            $http.delete(URL + 'fees/remove-fee/' + feeId).then(
                function (data) {
                    console.log(data);
                },
                function (data) {
                    console.log("Error: " + data);
                }
            );
        };
    }]);