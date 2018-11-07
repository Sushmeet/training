const mongooseConn = require('./mongooseConn');
const Blog = require("./models/blog");

const blogBody = {
  blogName: "Jombaaa88",
  blogContent: "contentful",
  meta: {
    votes: 3,
    favs: 2
  }
};

const createBlog = async blogBody => {
  const blog = new Blog(blogBody);
  console.log("blog", blog);
  const result = await blog.save();
  return result;
};

const blog = new Blog();
// createBlog(blogBody);

// blog.getAllBlogs().then(res => {
//   console.log("res", res);
// });

// blog.getBlogByName().then(res => {
//     console.log("happy blog only", res);
//   });

blog
  .getBlogBySpecialCriteria()
  .then(res => {
    console.log("special criteria response", res);
  })
  .catch(err => console.log("err", err));
