const React = require('react');
const Nav = require('Nav'); // use of 'Nav' here requires aliases to be configured in webpack.config.js

/*
const Main = React.createClass({
    render: function() {
        return (
            <div>
                <Nav/>
                <h2>Main Component</h2>
                {this.props.children}
            </div>
        );
    }
});
*/

const Main = (props) => {
  return (
    <div>
      <Nav/>
      <div className="row">
        <div className="small-centered medium-6 large-4 columns">
          {props.children} {/* handled by react-router; target for rendering separate page components */}
        </div>
      </div>
    </div>
  );
};

module.exports = Main;