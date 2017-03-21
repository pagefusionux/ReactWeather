/*
 * ReactWeather App
 */

// require react and react-dom
const React = require('react');
const ReactDOM = require('react-dom');

// ES6 "object destructuring syntax"
const {Route, Router, IndexRoute, hashHistory} = require('react-router');

const Main = require('Main'); // use of 'Main' here requires aliases to be configured in webpack.config.js
const Weather = require('Weather');
const About = require('About');
const Examples = require('Examples');

// Load Foundation (using style and css loaders)
require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();

// app css
require('style!css!applicationStyles');

/*
 ES6 object destructuring syntax above, essentially does this:
 
 const Route = require('react-router').Route;
 const Router = require('react-router').Router;
 const IndexRoute = require('react-router').IndexRoute;
 const hashHistory = require('react-router').hashHistory;

 -- or (another simplified example) --
 
 const obj = {
    name: 'Chris'
 }
 
 const {name} = obj; // example of destructuring the above 'obj'

*/

// implementation
ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="about" component={About}/>
      <Route path="examples" component={Examples}/>
      <IndexRoute component={Weather}/> {/* Must use IndexLink or it takes the nested page and makes both nav pages bold */}
    </Route>
  </Router>,
  document.getElementById('app')
);
