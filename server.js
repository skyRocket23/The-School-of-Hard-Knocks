const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');

const posts = [
    {
        username: 'Vijay',
        title: 'Vijay\'s Post'
    },
    {
        username: 'Mayank',
        title: 'Mayank\'s Post'
    },
    {
        username: 'Jigmet',
        title: 'Subham\'s Post'
    },
    {
        username: 'Stanzin',
        title: 'Stanzin\'s Post'
    },
    {
        username: 'Jigmet',
        title: 'Jigmet\'s Post'
    }
];

// Middleware to parse JSON data
app.use(express.json());

// Route to get posts for the authenticated user
app.get('/posts', authenticateUser, (req, res) => {
    const filteredPosts = posts.filter(post => post.username === req.user.name);
    res.json(filteredPosts);
});

// Route to generate JWT access token
app.post('/login', (req, res) => {
    // Authentication 
    const username = req.body.username;
    const user = { name: username };

    const accessToken = jwt.sign(user, 'hiddenKey', { expiresIn: '150s' });

    res.json({ accessToken });
});

// Middleware to authenticate user
function authenticateUser(req, res, next) {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        return res.sendStatus(401);
    }

    jwt.verify(token, 'hiddenKey', (err, decodedToken) => {
        if (err) {
            return res.sendStatus(403);
        }

        req.user = decodedToken;
        next();
    });
}

// Start server
app.listen(5000, () => {
    console.log('Server running on port 5000');
});
