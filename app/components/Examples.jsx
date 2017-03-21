const React = require('react');
const {Link} = require('react-router');

/*
var Examples = React.createClass({
  render: function () {
    return (
      <h3>Examples Component</h3>
    );
  }
});
*/

const Examples = (props) => {
  return (
    <div>
      <h1 className="text-center page-title">Examples</h1>
      <p>Here are a few example locations to try out.</p>
      <ol>
        <li>
          <Link to='/?location=Salt%20Lake%20City'>Salt Lake City, UT</Link>
        </li>
        <li>
          <Link to='/?location=Rio'>Rio de Janeiro, Brazil</Link>
        </li>
      </ol>
    </div>
  );
};

module.exports = Examples;