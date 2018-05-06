'use strict';

angular.module('myApp.authService', ['ngRoute'])
.service('AuthService', [function () {
    this.loggedInUser = {
        'id':'',
        'login': ''
    };

}]);