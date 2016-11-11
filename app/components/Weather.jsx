var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');
var ErrorModal = require('ErrorModal');

var Weather = React.createClass({
    getInitialState: function() {
        return {
            isLoading: false

        }
    },
    handleSearch: function(location){
        var that = this; 
        // clears out all the data so it doesnt stay around and cause problems 
        this.setState({
            isLoading: true,
            errorMessage: undefined,
            location: undefined,
            temp:undefined

        })
        openWeatherMap.getTemp(location).then(function(temp){
            that.setState({
                location:location,
                temp: temp,
                isLoading: false
            });
        }, function (e) {
            console.log(e)
            that.setState({
                isLoading:false,
                errorMessage: e.message
            })
        })
        
    },
    componentDidMount: function () {
        var location = this.props.location.query.location;

        if (location && location.length > 0) { 
            this.handleSearch(location);
            //removes location uery from the URL after the city has been searched 
            window.location.hash = "#/";
        }
    },
    // listens for a change in the props and updates the weather
    componentWillReceiveProps: function(newProps) {
        var location = newProps.location.query.location;

        if (location && location.length > 0) { 
            this.handleSearch(location);
            //removes location uery from the URL after the city has been searched 
            window.location.hash = "#/";
        }
    },
    
    
    render: function(){
        var {isLoading, temp, location, errorMessage} = this.state;

        function renderMessage () {
            if (isLoading){
                return <h3 className="text-center"> Fetching weather... </h3> 
            } else if(temp && location){
                return <WeatherMessage temp={temp} location={location}/>
            }
        }
        
        function renderError() {
            if (typeof errorMessage === 'string'){
                return (
                    <ErrorModal message={errorMessage}/>
                )
            }
        }

        return (
        <div>
            <h1 className="text-center page-title" > Get Weather </h1>
            <WeatherForm onSearch={this.handleSearch}/>
            {renderMessage()}
            {renderError()}
        </div>
        );
    }
});

module.exports = Weather; 

