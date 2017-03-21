var React = require('react');

var WeatherForm = React.createClass({
  onFormSubmit: function (e) {
    e.preventDefault();
    
    var location = this.refs.location.value;
    
    if (location.length > 0) {
      this.refs.location.value = '';
      this.props.onSearch(location);
      /* call parent onSearch (prop) -> handleSearch (function) */
    }
  },
  render: function () {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input type="text" ref="location"/>
          <input type="submit" value="Get Weather" />
        </form>
      </div>
    );
  }
});

module.exports = WeatherForm;