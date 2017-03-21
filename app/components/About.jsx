var React = require('react');

/*
var About = React.createClass({
  render: function () {
    return (
      <h3>About Component</h3>
    );
  }
});
*/

/* Stateless Functional Component
 * - do not have state
 * - only include a render function
 * */

const About = (props) => {
  return (
    <div>
      <h1 className="text-center">About</h1>
      <p>
        This application was made by following a tutorial called "The Complete React Web App Developer Course" on
        Udemy.com.
      </p>
      <ul>
        <li>
          <a href="http://www.udemy.com" target="_blank">Udemy</a>
        </li>
        <li>
          <a href="http://foundation.zurb.com/sites/docs" target="_blank">Foundation Docs</a>
        </li>
        <li>
          <a href="http://facebook.github.io/react/docs" target="_blank">React</a>
        </li>
        <li>
          <a href="http://openweathermap.org" target="_blank">OpenWeatherMap.org</a>
        </li>
      </ul>
    </div>
  );
};

module.exports = About;