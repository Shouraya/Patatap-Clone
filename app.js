const express = require ("express");
const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));  //PUBLIC --> static files (css)

app.get("/", function(req,res){
	res.render('clone');
});
//Server 
var port = process.env.PORT || 3000;
app.listen(port, function(){
	console.log("server has started !");
});