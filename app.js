const express = require('express');
const authRoutes = require('./routes/auth-routes');
const passportSetup = require('./config/passport-setup');

const mongoose = require('mongoose');
const keys = require('./config/keys');

const app = express();

// set view engine
app.set('view engine', 'ejs');

// connect to mongodb
mongoose
    .connect(keys.mongodb.dbURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log('Connected to MongoDB');
        app.listen(3000, () => {
            console.log('Server listening on port 3000');
        });
    })
    .catch((error) => {
        console.log('Error connecting to MongoDB:', error);
    });


// set up routes 
app.use('/auth', authRoutes);

// create home route
app.get('/', (req, res) => {
    res.render('home');
});

app.listen(3001, () => {
    console.log('app now listening for requests on port 3000');
});