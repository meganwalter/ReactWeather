const React = require('react');

var WeatherForm = React.createClass({
  onFormSubmit: function(){

  },
  render: function () {
    return (
      <div>
        <h1>Get Weather</h1>
        <form onSubmit={this.onFormSubmit}>
          <input type="text" placeholder="Enter city name"></input>
          <button>Get Weather</button>
        </form>
      </div>
    )
  }
});

module.exports = WeatherForm;
