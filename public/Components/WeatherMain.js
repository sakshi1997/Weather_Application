var React=require('react');
var WeatherForm=require('WeatherForm');
var WeatherMessage=require('WeatherMessage');
var Api=require('WeatherApi');

var WeatherMain=React.createClass({
    getInitialState :function(){
        return{
            isLoading:false
        }
    },
    handleSearch: function(location){
        var that=this;
        this.setState({isLoading:true})

    Api.getTemp(location).then(function(temp){
        that.setState({
            location:location,
            temp:temp,
            isLoading:false
        })
    },function(errorMessage){
        that.setState({isLoading:false});
        alert(errorMessage);
    });
    },
    render:function(){
        var{isLoading,temp,location}=this.state;
        function renderData(){
            if(isLoading){
                return <h3>Loading Data Please Wait...</h3>
            }
            else if(temp && location){
                return <WeatherMessage temp={temp} location= {location}/>
            }
        }
        return(
            <div>
        <div className="jumbotron text-center">
               <h1>Weather Application</h1>
               <h5>(Check Your City Weather)</h5>
            </div>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderData()}
        </div>
        )
    }
});


module.exports=WeatherMain