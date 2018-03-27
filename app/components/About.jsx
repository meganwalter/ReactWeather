const React = require('react');

var About =  (props) => {
  return (
    <div>
      <h1 className="text-center">About</h1>
      <p className="text-center">Welcome to my React Weather App!</p>
      <p className="text-center">In this <a href="https://www.udemy.com/">Udemy</a> course I've learned:</p>
      <ul className="columns small-10 small-centered">
        <li><a href="https://reactjs.org/">React</a></li>
        <li><a href="https://www.npmjs.com/package/react-router">React Router</a></li>
        <li><a href="https://webpack.js.org/">Webpack</a></li>
        <li><a href="https://foundation.zurb.com/">Foundation</a></li>
        <li><a href="http://openweathermap.org">Open Weather Map API</a></li>
      </ul>
    </div>
  )
};

module.exports = About;
