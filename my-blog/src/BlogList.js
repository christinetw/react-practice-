const BlogList = ({blogs,handleDelete}) => {

  return ( 
    <div className='bloglist'>
{
        blogs.map((blog)=>(
          <div className='blog-preview' key={blog.id}>
            <h1>Written by {blog.title}</h1>
            <p>blog.author</p>
            <button onClick={()=>handleDelete(blog.id)}> delete blog </button>
            </div>
      ))
      }

    </div>
   );
}
 
export default BlogList;