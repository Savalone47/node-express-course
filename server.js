const express = require("express");
const app = express();

const PORT = process.env.PORT || 8000;

const mockUserData = [
	{ name: 'mark'},
	{ name: 'jil'}
]
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

// Running the server
app.listen(PORT ,() => console.log(`server is running on ${PORT}`));