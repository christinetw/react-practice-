import { useState ,useEffect} from "react";
import { unstable_UserBlockingPriority } from "scheduler";
import BlogList from "./BlogList";

const Home = () => {
const [blogs,setBlogs]=useState([
  {title:'welcom party',body:'asdfg',author:'chiao',id:1},
  {title:'welcom home',body:'qwert',author:'EE',id:2}
]

);
 
const handleDelete =(id)=>{
const newBlogs =blogs.filter(blog=>blog.id!==id);
setBlogs(newBlogs);
}
useEffect (()=>{

},[]);
  return ( 
    <div className='home'>
      <BlogList blogs={blogs} handleDelete={handleDelete}/>
    </div>  
   );
}
 
export default Home;