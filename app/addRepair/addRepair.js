'use strict';

angular.module('myApp.addRepair', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/addRepair', {
            templateUrl: 'addRepair/addRepair.html',
            controller: 'addRepairCtrl'
        });
    }])

    .controller('addRepairCtrl', ['$http', '$routeParams', function ($http, $routeParams) {
        var URL = 'http://localhost:8080';
        var self = this;
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
                        // document.getElementById("name").value = data.data.name;
                        // document.getElementById("cost").value = data.data.repairCost;
                        // document.getElementById("description").value = data.data.repairDescription;

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
                $http.post(URL + "/repairs/add-repair", self.formRepair)
                    .then(function (data) {
                        console.log(data);
                    }, function (data) {
                        console.log(data);
                    });
            } else {
                // todo: metoda edycji danych a nie dodania
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