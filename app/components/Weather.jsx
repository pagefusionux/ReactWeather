/*
* Weather.jsx: Container (Presentational Component)
* - handles state for: location, temp
* - has two child components
*   - WeatherForm.jsx
*   - WeatherMessage.jsx
* - openWeatherMap componentized to encapsulate API call functionality
* */

const React = require('react');
const WeatherForm = require('WeatherForm');
const WeatherMessage = require('WeatherMessage');
const openWeatherMap = require('openWeatherMap'); // API Promise
const ErrorModal = require('ErrorModal');

// Page component
const Weather = React.createClass({
  getInitialState: function () {
    return {
      isLoading: false
    }
  },
  handleSearch: function (location) {
  
    const that = this; // for this.setState below
    
    //debugger; // use debugger to pause React dev-tools tab (breakpoint)
    this.setState({
      isLoading: true,
      errorMessage: undefined
    });
    
    /* do promise stuff in openWeatherMap component */
    openWeatherMap.getTemp(location).then(function (temp) {
      that.setState({ // uses 'that'
        location: location,
        temp: temp,
        isLoading: false
      });
    }, function (e) {
      that.setState({
        isLoading: false,
        errorMessage: e.message
      });
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
    let {isLoading, temp, location, errorMessage} = this.state;
    
    // conditional moved into function
    function renderMessage () { // handles loading to output presentation transition (must return JSX code)
      if (isLoading) {
        return <h3 className="text-center">Fetching weather...</h3>;
      } else if (temp && location) {
        return <WeatherMessage temp={temp} location={location}/>;
      }
    }
  
    function renderError () {
      if (typeof errorMessage === 'string') {
        return (
          <ErrorModal message={errorMessage} />
        )
      } else {
        console.log('no error');
      }
    }
    
    return (
      <div>
        <h1 className="text-center">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()} {/* This is a JSX expression (that handles a conditional). */}
        {renderError()}
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