'use strict';

angular.module('myApp.addRepair', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/addRepair', {
            templateUrl: 'addRepair/addRepair.html',
            controller: 'addRepairCtrl'
        });
    }])

    .controller('addRepairCtrl', ['$http', '$routeParams','$rootScope', function ($http, $routeParams, $rootScope) {
        var URL = 'http://localhost:8080';
        var self = this;
        self.loggedInUser = $rootScope.loggedInUser;
        self.carId = $routeParams.carId;
        self.encodedParam = ("/repairs/add-car-repair?carId="+self.carId+"&carOwnerId="+self.loggedInUser)
        this.formRepair = {
            'id': '',
            'name': '',
            'workshop': '',
            'repairCost': '',
            'repairDescription': ''
        };

        this.loadRepair = function () {
            if ($routeParams.repairId !== undefined) {
                console.log("Not undefined");
                $http.get(URL + "/repairs/get?id=" + $routeParams.repairId)
                    .then(function (data) {
                        self.formRepair = data.data;
                        self.editedElementId = data.data.id;
                    }, function () {

                    });
                document.getElementById("submitButton").value = "Save";
            } else {
                console.log("undefined");
            }
        };
        this.loadRepair();

        this.sendToBackend = function () {
            if (self.editedElementId === undefined) {
                $http.post(URL + self.encodedParam, self.formRepair)
                    .then(function (data) {
                        console.log(data);
                    }, function (data) {
                        console.log(data);
                    });
            } else {
                self.formRepair.id = self.editedElementId;
                $http.post (URL + "/repairs/edit-repair", self.formRepair)
                    .then (function (data) {
                        console.log(data);
                        },
                        function (data) {
                        console.log(data);
                    });
            }
        };
    }]);