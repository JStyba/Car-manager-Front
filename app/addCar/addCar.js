'use strict';

angular.module('myApp.addCar', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/addCar', {
            templateUrl: 'addCar/addCar.html',
            controller: 'addCarCtrl'
        });
    }])

    .controller('addCarCtrl', ['$http', '$routeParams', function ($http, $routeParams) {
        var URL = 'http://localhost:8080';
        var self = this;
        this.formCar = {
            'id': '',
            'make': '',
            'model': '',
            'fuelType': '',
            'dateProduced': '',
            'vin': '',
            'engineCapacity': '',
            'numberOfSeats': '',
            'registrationNumber': ''
        };

        this.loadCar = function () {
            if ($routeParams.carId !== undefined) {
                console.log("Not undefined");
                $http.get(URL + "/cars/get?carId=" + $routeParams.carId)
                    .then(function (data) {
                        // document.getElementById("name").value = data.data.name;
                        // document.getElementById("cost").value = data.data.expenseCost;
                        // document.getElementById("description").value = data.data.expenseDescription;

                        self.formCar = data.data;
                        self.editedElementId = data.data.id;
                    }, function () {

                    });
                document.getElementById("submitButton").value = "Save";
            } else {
                console.log("undefined");
            }
        };
        this.loadCar();

        this.sendToBackend = function () {
            if (self.editedElementId === undefined) {
                $http.post(URL + "/cars/add-car", self.formCar)
                    .then(function (data) {
                        console.log(data);
                    }, function (data) {
                        console.log(data);
                    });
            } else {
                // todo: metoda edycji danych a nie dodania
                self.formCar.id = self.editedElementId;
                $http.post (URL + "/cars/edit-car", self.formCar)
                    .then (function (data) {
                        console.log(data);
                        },
                        function (data) {
                        console.log(data);
                    });
            }
        };
    }]);