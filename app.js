const express = require('express');
const app = express();
const PORT = process.env.PORT || 2025;

app.get('/', (req, res) => {
    res.send('Hello, Docker!');
});

app.listen(2025, '0.0.0.0', () => {
    console.log('Server is running on port 2025');
});
