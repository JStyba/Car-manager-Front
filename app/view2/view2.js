'use strict';

angular.module('myApp.view2', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/view2', {
            templateUrl: 'view2/view2.html',
            controller: 'View2Ctrl'
        });
    }])

    .controller('View2Ctrl', ['$http', function ($http) {
        var URL = 'http://localhost:8080';
        var self = this;
        this.formUser = {
            'login': '',
            'email': '',
            'password': ''
        };

        this.sendToBackend = function () {
            $http.post(URL + "/user/register", self.formUser)
                .then(function (data) {
                    console.log(data);
                }, function (data) {
                    console.log(data);
                });
        };
    }]);