'use strict';
angular.module('myApp.userCars', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/userCars', {
            templateUrl: 'userCars/userCars.html',
            controller: 'UserCarsCtrl'
        });
    }])
    .controller('UserCarsCtrl', ['$scope', '$http', '$window', '$rootScope', 'AuthService', function ($scope, $http, $window, $rootScope, AuthService) {
        var URL = 'http://localhost:8080/';
        var self = this;
        this.loggedInUser = AuthService.loggedInUser.id;
        this.userCars = [];
        this.fetchCars = function () {
            $http.get(URL + 'cars/list-user-cars?userId=' + self.loggedInUser)
                .then(
                    function (data) {
                        console.log(data);
                        var cars = data.data;
                        self.userCars = [];
                        for (var index in cars) {
                            console.log(cars[index])
                            self.userCars.push(cars[index])
                        }
                    },
                    function () {
                        console.log("error");
                    }
                );

        };
        self.fetchCars();

        this.removeCar = function (carId) {
            $http.delete(URL + 'cars/remove-car/' + carId).then(
                function (data) {
                    console.log(data);
                },
                function (data) {
                    console.log("Error: " + data);
                }
            );
        };

        this.editCar = function (carId) {
            $window.location.href = '#!/addCar?carId=' + carId

        };
        this.addExpense = function (carId) {
            $window.location.href = '#!/addExpense?carId=' +carId

        };
        this.addFee = function (carId) {
            $window.location.href = '#!/addFee?carId=' +carId

        };
        this.addRepair = function (carId) {
            $window.location.href = '#!/addRepair?carId=' +carId

        };


    }]);