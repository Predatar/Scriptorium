const express = require('express'),
	jwt = require('jsonwebtoken'),
	users = require('./users.json');
const app = express();
const port = 3000;

const tokenKey = '1a2b-3c4d-5e6f-7g8h';

app.use(express.json());

app.get('/', (req, res) => {
	res.send('hello');
});

app.post('/login', (req, res) => {
	const { username, password } = req.body;

	console.log(username, password);

	const token = jwt.sign({ username, password }, 'password1', {
		algorithm: 'HS256',
		expiresIn: '1h',
	});

	res.status(200).send(token);
});

app.post('/verify', (req, res) => {
	const { authorization } = req.headers;

	const verify = jwt.verify(authorization.split(' ')[1], 'password1', {
    algorithms: 'HS256'
  });

	res.status(200).json(verify);
});

app.listen(port, () => console.log(`Server listens port:${port}`));
