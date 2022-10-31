import React from 'react'
import './featured.scss'

import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

const Featured = ({type}) => {
  return (
    <div className='featured'>
        {type && (
            <div className='category'>
                <span>{type === "movie" ? "Movies" : "Series" }</span>
                <select name="genre" id="genre">
                    <option >Genre</option>
                    <option value="adventure">Adventure</option>
                    <option value="comedy">Comedy</option>
                    <option value="fantasy">Fantasy</option>
                    <option value="historical">Historical</option>
                    <option value="horror">Horror</option>
                    <option value="romance">Romance</option>
                    <option value="sci-fi">Sci-fi</option>
                    <option value="thriller">Thriller</option>
                    <option value="western">Western</option>
                    <option value="animation">Animation</option>
                    <option value="drama">Drama</option>
                    <option value="documentary">Documentary</option>
                </select>

            </div>
        )}

        <img src="https://static.wixstatic.com/media/2cd43b_721ed550d5a3413093d098e223acad2a~mv2.png/v1/fill/w_320,h_156,q_90/2cd43b_721ed550d5a3413093d098e223acad2a~mv2.png" alt="" />
         <div className="info">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt_Qp0EbHeF_Hy0ki4OrOeJ9T_9jGtsxwqjOqkuqUk_ZoxqypivAhd7glP_atjjWQx2w0&usqp=CAU" alt="" />
            <span className="desc">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi temporibus dolor rerum itaque sunt eum minus omnis quod, quia sit modi commodi sed unde, expedita aperiam voluptatum dolorem tempore. Tenetur. </span>
            <div className="buttons">
                <button className='play'>
                    <PlayCircleIcon />
                    <span>Play</span>
                </button>
                <button className='more'>
                    <InfoOutlinedIcon />
                    <span>Info</span>
                </button>
            </div>

        </div>
    </div>
  )
}

export default Featured