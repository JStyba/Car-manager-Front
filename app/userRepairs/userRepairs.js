'use strict';
angular.module('myApp.userRepairs', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/userRepairs', {
            templateUrl: 'userRepairs/userRepairs.html',
            controller: 'UserRepairsCtrl'
        });
    }])
    .controller('UserRepairsCtrl', ['$scope', '$http', '$window', function ($scope, $http, $window)  {
        var URL = 'http://localhost:8080/';
        var self = this;
        this.userRepairs = [];
        this.fetchRepairs = function () {
            $http.get(URL + 'repairs/listrepairs')
                .then(
                    function (data) {
                        console.log(data);
                        var repairs = data.data;
                        self.userRepairs = [];
                        for (var index in repairs) {
                            console.log(repairs[index])
                            self.userRepairs.push(repairs[index])
                        }
                    },
                    function () {
                        console.log("error");
                    }
                );

        };
        self.fetchRepairs();

        this.removeRepair = function (repairId) {
            $http.delete(URL + 'repairs/remove-repair/' + repairId).then(
                function (data) {
                    console.log(data);
                },
                function (data) {
                    console.log("Error: " + data);
                }
            );
        };

        this.editRepair = function (repairId) {
            $window.location.href = '#!/addRepair?repairId='+repairId

        };


    }]);