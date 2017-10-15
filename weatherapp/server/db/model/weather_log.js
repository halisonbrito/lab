require("./../conf/connection");
const mongoose = require("mongoose");

var weatherLogSchema = new mongoose.Schema({
    searchAddress: {
    type: String,
    required: true
   },
    result: Boolean,
    recorded: Boolean,
    date: Date,
    weatherResult: {
            realAddress:String,
            longitude:String,
            latitude:String,
            info:{
                summary:String,
                temperature:String
            }
        }
});


var WeatherLog = mongoose.model('WeatherLog',  weatherLogSchema);



var save = ( object ) =>{
   var weatherLog = new WeatherLog(object);
   
   return weatherLog.save();
};

var findAll = () =>{
    return WeatherLog.find();
};

var findByAddress = (address) =>{
    var jsonObject = {"weatherResult.realAddress":{ "$regex": address } };
    return WeatherLog.collection.find(jsonObject).toArray();
};

module.exports = {save,findAll,findByAddress};







