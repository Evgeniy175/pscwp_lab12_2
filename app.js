const Express = require('express');

// -- // -- // -- // -- // -- // -- // -- // -- // -- // -- // -- // -- // -- //

const app = Express();

// -- // -- // -- // -- // -- // -- // -- // -- // -- // -- // -- // -- // -- //

app.use('/', (req, res) => { res.end('Hello azaza World!') });

app.listen(process.env.PORT || 3000, function() {
    console.log('Server running...');
});
