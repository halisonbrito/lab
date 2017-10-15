const express = require("express");
const body = require("body-parser");
const app = express();
const router = express.Router();
const weather_log = require("./db/model/weather_log");

app.use(body.json());

app.use(function(err,req,res,next) {
  console.log(err.stack);
  res.status(500).send({"Error" : err.stack});
});

router.post( "/log",  (req, res) =>{
    var reqData = req.body; 

    console.log(req.body);

    var object = {
        searchAddress: req.body.searchAddress,
        result: true,
        recorded: false,
        date: new Date(),
        weatherResult: {
                realAddress:req.body.realAddress,
                longitude:req.body.longitude,
                latitude:req.body.latitude,
                info:{
                    summary:req.body.summary,
                    temperature:req.body.temperature
                }
            }
    }

    weather_log.save(object).then( (value) => {
        console.log(value)
    }).catch( (ex) =>{
		throw new Error();
    });
});


router.get("/list", (req,res) => {
    weather_log.findAll().then( (value) => {
        res.send(value);
    }).catch( (ex) => {
        
    });
});

router.get("/find/:address", (req,res) => {
    console.log(req.params.address);

    weather_log.findByAddress( req.params.address ).then( (value) => {
        res.send(value);
        console.log( value);    
    }).catch( (ex) => {
        
    });
});



app.use(router);
app.listen(3000);

