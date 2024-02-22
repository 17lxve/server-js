import postSchema from "../models/posts";

function create(req, res){
    const post = new postSchema(req.body);
    res.send({result: post})
}