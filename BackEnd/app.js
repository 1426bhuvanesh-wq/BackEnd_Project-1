const express = require("express");
const multer = require("multer");
const uploadFile = require("./src/BackEnd/services/storage.service");
//const postModel = require("./models/post.model");
const postModel = require('./src/BackEnd/models/post.model');
const cors = require("cors");

console.log("Imported model:", postModel);
console.log("Model type:", typeof postModel);
console.log("Create type:", typeof postModel.create);
console.log("Resolved file:", require.resolve('./src/BackEnd/models/post.model'));


const app = express();
app.use(cors());
const upload = multer({storage: multer.memoryStorage()}); 

app.post('/create-post', upload.single('image'), async (req, res) => {
    console.log(req.body);
    console.log(req.file);

    const result = await uploadFile(req.file.buffer);

    const post = await postModel.create({
        image: result.url,
        caption: req.body.caption,
    })

    return res.status(201).json({
        message: "Post created successfully",
        post: post, 
    })  
})

app.get('/posts', async (req, res) => {
    const posts = await postModel.find();
    
    return res.status(200).json({
        message: "Posts fetched successfully",
        posts: posts,
    })
})  



module.exports = app;