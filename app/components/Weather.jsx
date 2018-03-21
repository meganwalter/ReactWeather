const React = require('react');
const WeatherForm = require('WeatherForm');
const WeatherMessage = require('WeatherMessage');

var Weather = React.createClass({
  render: function () {
    return (
      <div>
        <WeatherForm />
        <WeatherMessage />
      </div>
    )
  }
});

module.exports = Weather;
