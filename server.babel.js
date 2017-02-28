import express from 'express';

const app = express();

app.use('/', express.static('public'));

// Listen on specified port or 3000 if unspecified
app.listen(process.env.PORT || 3000, function() {
	console.log('Node server listening on port 3000');
})
