'use strict';

console.log('App.js is running');

var heya = 'wassup';
// JSX - JavaScript XML
var template = React.createElement(
  'h1',
  null,
  'heya'
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
