/*
* Weather.jsx: Container (Presentational Component)
* - handles state for: location, temp
* - has two child components
*   - WeatherForm.jsx
*   - WeatherMessage.jsx
* - openWeatherMap componentized to encapsulate API call functionality
* */

var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap'); // API Promise

// Page component
var Weather = React.createClass({
  getInitialState: function () {
    return {
      isLoading: false
    }
  },
  handleSearch: function (location) {
    
    var that = this; // for this.setState below
    
    //debugger; // use debugger to pause React dev-tools tab (breakpoint)
    this.setState({
      isLoading: true
    });
    
    /* do promise stuff in openWeatherMap component */
    openWeatherMap.getTemp(location).then(function (temp) {
      that.setState({ // uses 'that'
        location: location,
        temp: temp,
        isLoading: false
      });
    }, function (errorMessage) {
      that.setState({
        isLoading: false
      });
      alert(errorMessage);
    });
    
    /*
    * Why do we have to assign 'this' to 'that' in the code above to use setState()?
    *
    * It has to do with what 'this' is referring to when setState is called.
    *
    * 'this' refers to a child scope layer inside of openWeatherMap...()
    * to use setState() we have to refer to the parent scope that has this function in its scope
    *
    * */
    
    
  },
  render: function () {
    var {isLoading, temp, location} = this.state;
    
    // conditional moved into function
    function renderMessage() { // handles loading to output presentation transition (must return JSX code)
      if (isLoading) {
        return <h3>Fetching weather...</h3>;
      } else if (temp && location) {
        return <WeatherMessage temp={temp} location={location}/>;
      }
    }
    
    return (
      <div>
        <h3>Weather Component</h3>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()} {/* This is a JSX expression (that handles a conditional). */}
      </div>
    );
  }
  
});

module.exports = Weather;

/*
* React always outputs a view that represents the state. If you change the state, React changes the view (but
* does so in a way that uses very little resources -- changing just the area that needs to be changed).
*
* */