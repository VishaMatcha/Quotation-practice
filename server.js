const express = require('express');
const getRandomQuote = require('./quotes');

const app = express();
const PORT = 3000;

app.use(express.static('public'));

app.get('/', async (req, res) => {
    const quote = await getRandomQuote();
    res.send(`
        <html>
            <head>
                <title>Motivational Quote's</title>
                <link rel="stylesheet" type="text/css" href="styles.css">
            </head>
            <body>
                <div class="container">
                    <h1>${quote}</h1>
                </div>
            </body>
        </html>
    `);
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
