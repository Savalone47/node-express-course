const express = require("express");
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();


const PORT = process.env.PORT || 8000;

const mockUserData = [
	{ name: 'mark'},
	{ name: 'jil'}
]

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Get Home page
app.get('/', (req, res) => {
	res.json({
		message: 'successfully'
	});
});
// Get User message
app.get('/users', (req, res)=>{
	res.json({
		success: true,
		message: 'successfully got users Nice!',
		users: mockUserData
	});
});
// Get User id section
app.get('/users/:id', (req, res)=>{
	console.log(req.params.id);
	res.json({
		success: true,
		message: 'got one user',
		users: req.params.id
	});
});


app.post('/login', (req, res)=>{

	const username = req.body.username;
	const password = req.body.password;

	const mockUsername = "savalone47";
	const mockPassword = "secret";

	if(username===mockUsername && password===mockPassword){
		res.json({
			success: true,
			message: 'password and username match!',
			token: 'encrypted token goes here'
		});
	}else{
		res.json({
			success: true,
			message: 'password and password do not match!'
		});
	}
});

// Running the server
app.listen(PORT ,() => console.log(`server is running on ${PORT}`));