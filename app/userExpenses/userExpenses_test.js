'use strict';

describe('myApp.userExpenses module', function() {

  beforeEach(module('myApp.userExpenses'));

  describe('userExpenses controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var UserExpensesCtrl = $controller('UserExpensesCtrl');
      expect(UserExpensesCtrl).toBeDefined();
    }));

  });
});