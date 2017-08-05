var assert = require('assert');

describe('Sushi', function() {
    describe('2nd level Sushi', function() {
        it('please check something', function(){
            assert.equal (3,3);
        });
    });
});


describe('Array', function() {

  describe('#indexOf()', function() {

    it('should return -1 when the value is not present', function() {
      assert.equal(-1, [1,2,3].indexOf(4));
    });
  });
});