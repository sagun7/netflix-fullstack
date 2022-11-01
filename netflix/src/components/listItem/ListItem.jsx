import React, { useState } from 'react'
import './listItem.scss'

import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddIcon from '@mui/icons-material/Add';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOffAltOutlinedIcon from '@mui/icons-material/ThumbDownOffAltOutlined';

const ListItem = ({index}) => {
  const [isHovered, setIsHovered] = useState(false);
  const trailer = "https://vimeo.com/758853923"
  return (
    <div className='listItem' 
    style ={{left: isHovered && index* 225 - 50 + index * 2.5}}
    onMouseEnter={()=> setIsHovered(true)} onMouseLeave={()=>setIsHovered(false) }>
      <img src="https://m.media-amazon.com/images/M/MV5BMTc5NTk2OTU1Nl5BMl5BanBnXkFtZTcwMDc3NjAwMg@@._V1_QL75_UY281_CR0,0,190,281_.jpg"
       alt="" />
       {isHovered && (
        <>
           <video src={trailer} autoPlay={true} loop/>

    
      
       <div className="itemInfo">
        <div className="icons">
          <PlayArrowIcon className='icon' />
          <AddIcon className='icon' />
          <ThumbUpOutlinedIcon className='icon' />
          <ThumbDownOffAltOutlinedIcon className='icon' />
        </div>
        <div className="itemInfoTop">
          <span>1 hour 14 mins</span>
          <span className="limit">+16</span>
          <span>1999</span>
        </div>
        <div className="desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, explicabo!
        </div>
        <div className="genre">Action</div>
       </div> 
       </>
          )}
    </div>
  )
}

export default ListItem