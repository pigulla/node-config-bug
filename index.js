const assert = require('node:assert')
const config = require('config')

assert.deepStrictEqual(
    config.util.toObject(),
    { foo: null },
)