const assert = require('power-assert')

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert(3 === [1, 2, 3].indexOf(4))
    })
  })
})