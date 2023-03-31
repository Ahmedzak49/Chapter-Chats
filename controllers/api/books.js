const axios = require("axios");
const User = require("../../models/user");


const googleSearchBooks = async (req, res) => {
    console.log('Google Search', req.body);
    const url = `https://www.googleapis.com/books/v1/volumes?q=${req.body.searchTerm}&maxResults=20&key=${process.env.GOOGLE_API_KEY}`;
    const googleResponse = await axios.get(url);
    console.log("google results", googleResponse.data);
    res.json(googleResponse.data.items);

};

const addNewBook = async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(req.user._id, {
            $push:{
                bookList: req.body
            }
        }, {new: true});
        res.json(updatedUser);

    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }

};
const removeBook = async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(req.user._id, {
            $pull:{
                bookList: {_id: req.params.id}
            }
        }, {new: true});
        res.json(updatedUser);

    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }

};

const getUserBooks = async (req, res) => {
    try {
        const user = await User.findById(req.user._id)
        res.json(user.bookList);

    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }

};

module.exports = {googleSearchBooks, addNewBook, getUserBooks, removeBook};
