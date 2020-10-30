const express = require('express');
const bodyParser= require('body-parser')
var cors = require('cors')



const routes = require("./routes")

var mongoose = require('mongoose');

const app = express();
app.use(cors())

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());



mongoose
	.connect("mongodb+srv://chethan321:chethan@cluster0.x1du0.mongodb.net/emailProject?retryWrites=true&w=majority", { useNewUrlParser: true ,useUnifiedTopology: true})
	.then(() => {

        app.use("/api", routes)
	
		app.listen(5000, () => {
			console.log("Server has started!")
		})
	})


