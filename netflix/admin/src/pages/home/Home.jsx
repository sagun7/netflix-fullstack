import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./home.css";
import { userData } from "../../dummyData";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import { useEffect,useState } from "react";
import axios from 'axios'
import { useMemo } from "react";

export default function Home() {
  const MONTHS = useMemo( () =>
  ["January","February","March","April","May","June","July",
  "August","September","October","November","December"],[]);

  const [userStats, setUserStats] = useState([]);


  useEffect(() =>{
    const getStats= async() =>{
      try{

      
      const res = await axios.get("/users/stats",
      {
        headers:{
          token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNmM0YTg0ODRkZTgwYmNjODA2MmNjNCIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2NjgwNDM1NDMsImV4cCI6MTY2ODQ3NTU0M30.uRPlnf9gTEEoyvZ2wU6C1-DAV-gYvwIosq6-fjNR-u8"

        },
      });
      const statsList= res.data.sort(function (a,b){
        return a._id - b._id;
      })
     statsList.map(item => setUserStats(prev => [...prev, {name:MONTHS[item._id-1],"New User":item.total}]))
    }catch(err){
      console.log(err);
    }
  };
  getStats();
},[MONTHS]);
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart 
        data={userStats} 
        title="User Analytics" 
        grid 
        dataKey="New User"/>
      
      <div className="homeWidgets">
        <WidgetSm/>
        <WidgetLg/>
      </div>
    </div>
  );
}
