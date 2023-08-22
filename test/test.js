const assert = require('assert');
const generateId = require('../src/middleware/deviceid');

describe('middleware test', function () {
  it('generateId function is normal', function() {
    assert.ok(!!generateId('ddd'))
  })
});