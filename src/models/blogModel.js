import mongoose from 'mongoose';
const blogSchema = new mongoose.Schema({
    blogContent : {type:mongoose.Schema.Types.Mixed, required:true},
    title       : {type:String, required:true},
    tags        : {type:String, required:true},
    blogPic     : {type:String, required:false},
}, {timestamps:true});

export default mongoose.models.AssetElixirBlog || mongoose.model('AssetElixirBlog', blogSchema);