const express = require('express')
const path = require("path");
const router = express.Router(); //router
const blogsdata = require("../data/blogs")

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../templates/index.html'));
})

//show all blogs routes
router.get('/blogs', (req, res) => {
    blogsdata.forEach(element => {
        console.log(element.title);
    });
    res.sendFile(path.join(__dirname, '../templates/blogHome.html'));
})

//show single blog: http://localhost:3000/blogpost/second-b
router.get('/blogpost/:slug', (req, res) => {
    myBlog = blogsdata.filter((e) => {
        return e.slug == req.params.slug
    });
    console.log(myBlog,'myBlog');
    res.sendFile(path.join(__dirname, '../templates/blogPage.html'));
})

module.exports = router; //make export show it will be used in index.js

