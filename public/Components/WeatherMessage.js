var React=require('react');

var WeatherMessage=React.createClass({
    render: function(){
        var {temp,location}=this.props;
        return(
            <div>
        <h3>City : {location}</h3>
        <h3>Temperature of {location} : {temp} Fahrenheit</h3>
        </div>
        )
    }
});

module.exports=WeatherMessage
