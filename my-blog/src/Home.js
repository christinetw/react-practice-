import { useState ,useEffect} from "react";
import { unstable_UserBlockingPriority } from "scheduler";
import BlogList from "./BlogList";

const Home = () => {
const [blogs,setBlogs]=useState(null);
 
const handleDelete =(id)=>{
const newBlogs =blogs.filter(blog=>blog.id!==id);
setBlogs(newBlogs);
}
useEffect (()=>{
fetch('http://localhost:3000/blogs')
.then(res=>{
  return res.json();
})
.then(Data=>{
setBlogs(Data)
})
},[]);
  return ( 
    <div className='home'>
      {blogs &&<BlogList blogs={blogs} handleDelete={handleDelete}/>}
    </div>  
   );
}
 
export default Home;