const express = require("express");
const app = express();

const PORT = process.env.PORT || 8000;

const mockUserData = [
	{ name: 'Mark'},
	{ name: 'Jil'}
]

app.get('/users', (req, res)=>{
	res.json({
		success: true,
		message: 'successfully got users Nice!',
		users: mockUserData
	});
});

app.listen(PORT ,() => console.log(`server is running on ${PORT}`));