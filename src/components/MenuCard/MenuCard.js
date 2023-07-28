import React from 'react'
import './MenuCard.css'
import { Link } from 'react-router-dom'
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';


function MenuCard({problemsImg, url}) {
  return (
    <div className='menuCard'>
        <img src={problemsImg} alt='' />
        <Link to={url}>Solve <KeyboardDoubleArrowRightIcon className='menuCard__arrowBtn' /></Link>
    </div>
  )
}

export default MenuCard