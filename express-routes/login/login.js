const express = require('express');
const router = express.Router();

router.post('/validate', (req,res) => {

    const profile = {
        first: 'Mitch',
        last: 'Gohman',
        email: 'meatch@me.com',
    }

    const response = {
        errors: false, 
        message: 'Login Validated',
        isLoggedIn: true,
        profile: profile,
    }
    res.json(response);
});

module.exports = router;