require('babel-core/register')({
  'presets': [
    ['env', {
      'targets': {
        'node': 'current'
      }
    }]
  ]
})

require('babel-polyfill')
require('../src/index.js')
