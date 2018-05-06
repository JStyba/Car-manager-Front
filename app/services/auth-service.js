'use strict';

angular.module('myApp.authService', ['ngRoute'])
.service('AuthService', [function () {
    this.logged = '';
    this.loggedInUser = {
        'id':'',
        'login': ''
    };
}]);