const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const blogSchema = new Schema({
  blogName: String,
  blogContent: String,
  date: { type: Date, default: Date.now },
  meta: {
    votes: Number,
    favs: Number
  }
});

// assign a function to the "methods" object of our BlogSchema
blogSchema.methods.getAllBlogs = async function() {
  return await this.model('Blog').find({});
};

// assign a function to the "methods" object of our BlogSchema
blogSchema.methods.getBlogByName = async function() {
  return await this.model('Blog').find({ blogName: 'Happy Blog'});
};

blogSchema.methods.getBlogBySpecialCriteria = async function() {
  return await this.model('Blog')
    .find({ blogName: 'Happy Blog'})
    .limit(3)   // get 3 entries back.
    .sort({ date: 1 })
    .select({ blogName: 1 , date: 1 })
};

blogSchema.methods.createBlogs = async function () {

}

// assign a function to the "statics" object of our animalSchema
blogSchema.statics.findByName = function(name, cb) {
  return this.find({ name: new RegExp(name, "i") }, cb);
};

module.exports = mongoose.model('Blog', blogSchema);
