import React,{useEffect, useState} from 'react'
import Featured from '../../components/featured/Featured'
import List from '../../components/list/List'
import Navbar from '../../components/Navbar'

import axios from "axios"



import './home.scss'

const Home = ({type}) => {
  const [lists, setLists] = useState([]);
  const [genre, setGenre]= useState(null);

  useEffect(() => {
     const getRandomLists = async () =>{
      try{
        const res= await axios.get(`lists${type ? "?type="+type : ""}&${genre ? "&genre" +genre : ""}`,
        {
          headers:{
            token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNmM0YTg0ODRkZTgwYmNjODA2MmNjNCIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2NjgwNDM1NDMsImV4cCI6MTY2ODQ3NTU0M30.uRPlnf9gTEEoyvZ2wU6C1-DAV-gYvwIosq6-fjNR-u8"

          },
        }
        );


        setLists(res.data);

      }catch(err){
        console.log(err)
      }
     };
     getRandomLists();
  },[type, genre]);

  return (
    <div className='home'>
        <Navbar />
       
        <Featured type= {type}/>
        {lists.map((list)=>(
          <List list={list} />
        ))}
      
        


    </div>
  )
}

export default Home