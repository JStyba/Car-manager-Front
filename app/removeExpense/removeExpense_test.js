'use strict';

describe('myApp.view1 module', function() {

  beforeEach(module('myApp.removeExpense'));

  describe('view1 controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var removeExpenseCtrl = $controller('removeExpenseCtrl');
      expect(removeExpenseCtrl).toBeDefined();
    }));

  });
});