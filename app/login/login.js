'use strict';

angular.module('myApp.login', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/login', {
            templateUrl: 'login/login.html',
            controller: 'LoginCtrl'
        });
    }])
    .controller('LoginCtrl', ['$http', '$rootScope', 'AuthService', function ($http, $rootScope, AuthService) {
        var URL = 'http://localhost:8080';
        var self = this;
        this.formUser = {
            'login': '',
            'password': ''
        };
        this.authenticate = function () {

            $http.post(URL + "/authenticate", self.formUser).then(function (resp) {
                    console.log("Success: " + resp);
                    var token = resp.data.token;
                    var loggedInUser = resp.data.user;
                    AuthService.loggedInUser = loggedInUser;
                    $http.defaults.headers.common['Authorization'] = 'Bearer ' + token;
                    window.location = "#!/userCars"
                },
                function (resp) {
                    console.log("Error: " + resp);
                }
            )
        };
    }]);