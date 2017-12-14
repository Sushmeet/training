exports.shouldBehaveLikeAUser = function(value){
    
    it('should have .name.last', function(){
      expect(value).to.equals(5);
    });
  };