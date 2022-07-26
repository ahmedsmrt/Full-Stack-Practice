const express = require("express")
const router = express.Router()
const {getBlogPost, setBlogPost, updateBlogPost, deleteBlogPost} = require('../controllers/blogController')



router.route('/').get(getBlogPost).post(setBlogPost)
router.route('/:id').put(updateBlogPost).delete(deleteBlogPost)



module.exports = router