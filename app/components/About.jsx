var React = require('react');

var About = (props) => {
    return (
        <div>
            <h1 className="text-center"> About</h1>
            <p> This is a weather application built with React. I built it while doing a class on React.  </p>
            <p>
                Here are some of the resources that made this possible 
            </p> 
            <ul>
                <li>
                    <a href="https://facebook.github.io/react">React</a>
                </li>
                <li>
                    <a href="https://openweathermap.org">Open Weather Map</a>
                </li>
            </ul>
        </div>
        
    )
};

module.exports = About;