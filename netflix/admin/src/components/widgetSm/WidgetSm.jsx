import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

export default function WidgetSm() {
  const  [newUsers, setNewUsers] = useState([]);

  useEffect(()=>{
    const getNewUsers = async ()=>{
      try{
        const res = await axios.get("/users?new=true",
        {
          headers:{
            token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNmM0YTg0ODRkZTgwYmNjODA2MmNjNCIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2NjgwNDM1NDMsImV4cCI6MTY2ODQ3NTU0M30.uRPlnf9gTEEoyvZ2wU6C1-DAV-gYvwIosq6-fjNR-u8"
  
          },
        } );
        setNewUsers(res.data);
      }catch(err){
        console.log(err)
      }
     
    }
    getNewUsers();
  },[])

  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        {newUsers.map((user)=>(
             <li className="widgetSmListItem">
             <img
               src={user.profilePic ||" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7OMHMHZVlmuze07NDOh2nEKEcKyE8V_Sfxw&usqp=CAU" }
                alt=""
               className="widgetSmImg"
             />
             <div className="widgetSmUser">
               <span className="widgetSmUsername">{user.username}</span>
             
             </div>
             <button className="widgetSmButton">
               <Visibility className="widgetSmIcon" />
               Display
             </button>
           </li>

        ))}
       
       
      </ul>
    </div>
  );
}
