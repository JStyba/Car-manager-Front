'use strict';

angular.module('myApp.addFee', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/addFee', {
            templateUrl: 'addFee/addFee.html',
            controller: 'addFeeCtrl'
        });
    }])

    .controller('addFeeCtrl', ['$http','$routeParams', function ($http, $routeParams) {
        var URL = 'http://localhost:8080';
        var self = this;
        this.formFee = {
            'id': '',
            'name': '',
            'feeCost': '',
            'feeDescription': ''
        };
        this.loadFee = function () {
            if ($routeParams.feeId !== undefined) {
                console.log("Not undefined");
                $http.get(URL + "/fees/get?id=" + $routeParams.feeId)
                    .then(function (data) {
                        self.formFee = data.data;
                        self.editedElementId = data.data.id;
                    }, function () {

                    });
                document.getElementById("submitButton").value = "Save";
            } else {
                console.log("undefined");
            }
        };
        this.loadFee();

        this.sendToBackend = function () {
            if (self.editedElementId === undefined) {
                $http.post(URL + "/fees/add-fee", self.formFee)
                    .then(function (data) {
                        console.log(data);
                    }, function (data) {
                        console.log(data);
                    });
            } else {
                // todo: metoda edycji danych a nie dodania
                $http.post (URL + "/fees/edit-fee", self.formFee)
                    .then (function (data) {
                            console.log(data);
                        },
                        function (data) {
                            console.log(data);
                        });
            }
        };
    }]);