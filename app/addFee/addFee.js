'use strict';

angular.module('myApp.addFee', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/addFee', {
            templateUrl: 'addFee/addExpense.html',
            controller: 'addFeeCtrl'
        });
    }])

    .controller('addFeeCtrl', ['$http', function ($http) {
        var URL = 'http://localhost:8080';
        var self = this;
        this.formFee = {
            'name': '',
            'cost': '',
            'description': ''
        };

        this.sendToBackend = function () {
            $http.post(URL + "/fees/add-fee", self.addFee)
                .then(function (data) {
                    console.log(data);
                }, function (data) {
                    console.log(data);
                });
        };
    }]);