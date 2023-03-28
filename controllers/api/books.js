
const googleSearchBooks = async (req, res) => {
    console.log('Google Search', req.body);
    res.send('Testing Route');
};

module.exports = {googleSearchBooks};

