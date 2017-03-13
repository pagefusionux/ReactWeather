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
    <h3>About Component</h3>
  );
};

module.exports = About;