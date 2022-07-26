const asnyHandler = require('express-async-handler')

const BlogPost = require("../models/blogPostModel")



// @desc Get BlogPost
// @route GET /api/blogpost
// @access Private
const getBlogPost = asnyHandler(async (req, res) => {
    const blogPost = await BlogPost.find()

    res.status(200).json(blogPost)
})


// @desc Set BlogPost
// @route POST /api/blogpost
// @access Private
const setBlogPost = asnyHandler(async (req, res) => {
    

    // Logic to check for text
    if(!req.body.text) {
        res.status(400)
        throw new Error("Please add a text field")
    }
    // When creating a blog post using POST there is a create method that you can pass through the data
    const blogPost = await BlogPost.create( {
        text:req.body.text
    })

    res.status(200).json(blogPost)
})


// @desc Update BlogPost
// @route PUT /api/blogpost
// @access Private
const updateBlogPost = asnyHandler(async (req, res) => {

    // Special findbyid function to find post in database using the id
    const blogPost = await BlogPost.findById(req.params.id)

    if(!blogPost) {
        // If there isnt a blog post set the status code as 400
        res.status(400)
        // Then throw an error
        throw new Error("Blog Post not found")
    }

    // Then create a new variable that triggers a method that takes in the blogpost id , the body and if it's new true object
    const updatedBlogPost = await BlogPost.findByIdAndUpdate(req.params.id, req.body, {new:true,})

    res.status(200).json(updatedBlogPost)
})


// @desc Delete BlogPost
// @route DELETE /api/blogpost
// @access Private
const deleteBlogPost = asnyHandler(async (req, res) => {

    // Special findbyid function to find post in database using the id
    const blogPost = await BlogPost.findById(req.params.id)

    if(!blogPost) {
        // If there isnt a blog post set the status code as 400
        res.status(400)
        // Then throw an error
        throw new Error("Blog Post not found")
    }

    await blogPost.remove()

    res.status(200).json(updatedBlogPost)
})



module.exports =  {
    getBlogPost,
    setBlogPost,
    updateBlogPost,
    deleteBlogPost,
}