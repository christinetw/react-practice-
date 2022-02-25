import { Link } from "react-router-dom";

const BlogList = ({ blogs, handleDelete }) => {

  return (
    <div className='bloglist'>
       
      {
        blogs.map((blog) => (
          <div className='blog-preview' key={blog.id}>
            <Link to={`/blogs/${blog.id}`}>
             
              <h3>{blog.title}</h3>
              <p>Written by {blog.author}</p>
            </Link>


            <button onClick={() => handleDelete(blog.id)}> delete blog </button>
          </div>
        ))
      }

    </div>
  );
}

export default BlogList;