var express = require('express'),
	bodyParser = require('body-parser'),
	port = process.env.PORT || 3000,
	app = express();

app.use(express.static(__dirname + '/public'))

app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(bodyParser.json());

var AddressList = [];

app.get('/employees/1', function(req, res) {
	var employee = {
		name: "Sam",
		email: "sam@example.com",
		phoneNumber: "9916768790",
		profession: "painter"
	};
	res.send(employee);
});

app.put('/employees/1', function(req, res) {
	var employee = {
		name: req.body.name,
		email: req.body.email,
		phoneNumber: req.body.phoneNumber,
		profession: req.body.profession
	};
	res.send(employee);
});

app.post('/Address', function(req, res) {
	var Address = {
    addressStreet: req.body.addressStreet,
		addressCity: req.body.addressCity,
		addressState: req.body.addressState,
		addressZip: req.body.addressZip,
		userId: req.body.userId
	};
	AddressList.push(Address);
	res.send(Address);
});

app.get('/employees/1/Address', function(req, res) {
	res.send(AddressList[0]);
});


app.listen(port);
console.log("Server loaded on port", port)
