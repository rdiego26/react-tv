require('babel-register')({});

const React = require('react')
console.log(React.createElement('div'))
console.log(React.createElement('div', {a:1}))

const { render } = require('../src')
console.log(render)
