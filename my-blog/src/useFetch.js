import { useState ,useEffect} from "react";
const useFetch=(url)=>{
  const [data,setData]=useState(null);
  const [isPending,setIspending]=useState(true);
  const [error,setError]=useState(null)
  useEffect (()=>{
    fetch(url)
    .then(res=>{
      if(!res.ok){
        throw Error('could not fetch the data for the resource')
      }
      return res.json();
    })
    .then(Data=>{
    setData(Data);
    setIspending(false);
    setError(null)
    })
    .catch(err=>{
      setIspending(false);
    setError(err.message)
    })
    },[url]);
return{data,isPending,error}

}
export default useFetch