'use strict';

angular.module('myApp.main', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/main', {
            templateUrl: 'main/main.html',
            controller: 'MainCtrl'
        });
    }])

    .controller('MainCtrl', ['$http', function ($http) {
        var URL = 'http://localhost:8080';
        var self = this;



        this.redirectToLogin = function () {
            window.location = "#!/login";
        };
        this.redirectToRegister = function () {
            window.location = "#!/view2";

        };
    }]);