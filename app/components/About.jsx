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
      <h3>About</h3>
      <p>This is the about component.</p>
    </div>
  );
};

module.exports = About;