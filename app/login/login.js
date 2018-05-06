'use strict';

angular.module('myApp.login', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/login', {
            templateUrl: 'login/login.html',
            controller: 'LoginCtrl'
        });
    }])
    .controller('LoginCtrl', ['$http', '$rootScope', 'AuthService','$window', function ($http, $rootScope, AuthService, $window) {
        var URL = 'http://localhost:8080';
        var self = this;
        this.formUser = {
            'login': '',
            'password': ''
        };
        this.authenticate = function () {
            $http.post(URL + "/authenticate", self.formUser)
                .then(function (resp) {
                        console.log("Success: " + resp);

                        var token = resp.data.token;
                        var loggedInUser = resp.data.user;

                        // Ustawienie zalogowanego użytkownika
                        AuthService.loggedInUser = loggedInUser;

                        $http.defaults.headers.common['Authorization'] = 'Bearer ' + token;

                        $window.sessionStorage.setItem('token', token);
                        $window.sessionStorage.setItem('user_id', loggedInUser.id);

                        window.location = "#!/";
                    },
                    function (resp) {
                        console.log("Error: " + resp);
                    });
        };
        this.logout = function () {
            console.log('logged out')
            $window.sessionstorage().empty();
            $window.location = "#!/login";
        },

        function () {
            console.log('error')
        };

        }
    ]);