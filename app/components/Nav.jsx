var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({
    onSearch:function(e){
        e.preventDefault();
        
        var location = this.refs.location.value;
        // takes input and changes it into a format that the browser can understand. 
        var encodedLocation = encodeURIComponent(location);

        if (location.length > 0){
            this.refs.location.value='';
            //sets the query string in the URL to the route to find the weather in the specified location
            window.location.hash = '#/?location=' + encodedLocation;
        }
        
    },
    render: function() {
        return (
            <div className="top-bar">
                <div className="top-bar-left">
                    <ul className="menu">
                        <li className="menu-text">
                            React Weather App
                        </li>
                        <li>
                            <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight:'bold'}}> Get Weather </IndexLink>
                        </li>
                        <li>
                            <Link to="/about" activeClassName="active" activeStyle={{fontWeight:'bold'}}> About </Link> 
                        </li>
                        <li>
                            <Link to="/examples" activeClassName="active" activeStyle={{fontWeight:'bold'}}> Examples </Link>
                        </li>
                    </ul>
                </div>  
                <div className="top-bar-right">
                    <form onSubmit={this.onSearch}>
                        <ul className="menu">
                            <li>
                                <input type="Search" ref='location' placeholder="Search Weather by city"/>
                            </li>
                            <li>
                                <input type="submit"  className="button" value="Get Weather"/>
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        );
    }
})

module.exports = Nav; 
