import React from 'react'
import './list.scss'

import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import ListItem from '../listItem/ListItem';

const List = () => {
  return (
    <div className='list'>
        <span className='listTitle'> Continue to watch</span>
        <div className="wrapper">
            <ArrowBackIosNewOutlinedIcon className='sliderArrow left'/>
            <div className="container">
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />

            </div>
            <ArrowForwardIosOutlinedIcon className='sliderArrow right'/>


        </div>

    </div>
  )
}

export default List