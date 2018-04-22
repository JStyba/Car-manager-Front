'use strict';

angular.module('myApp.view1', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/view1', {
            templateUrl: 'view1/view1.html',
            controller: 'View1Ctrl'
        });
    }])

    .controller('View1Ctrl', ['$http', '$rootScope', function ($http, $rootScope) {
        var URL = 'http://localhost:8080';
        var self = this;
        this.zmienna = 5;
        this.userList = [];

        this.loggedInUser = $rootScope.loggedInUser;

        this.fetchUsers = function () {
            $http.get(URL + '/user/list')
                .then(
                    function (data) {
                        console.log(data);
                        var users = data.data.objects;

                        // czyszczenie kolekcji ze starych wpisów
                        self.userList = [];

                        for (var index in users) {
                            console.log(users[index]);
                            self.userList.push(users[index]);
                        }
                    },
                    function () {
                        console.log("error");
                    }
                );
        };

        self.fetchUsers();
    }]);