var React=require('react');

var WeatherForm =React.createClass({
    onFormSubmit: function(e){
        e.preventDefault();
        var location=this.refs.city.value;
        if(location.length>0){
            this.refs.city.value='';
            this.props.onSearch(location);
        }
    },
    render: function(){
        return(
        <div className="container-fluid">
        <form onSubmit={this.onFormSubmit}>
        <h3><label>City:</label></h3>
        <input type="text" ref="city" placeholder="Enter your city" className="form-control" /><br/>
        <center><button className="btn btn-success">Check your city weather</button></center>
        </form>
        </div>
        )
    }
});

module.exports=WeatherForm
