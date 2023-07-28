import React from 'react'
import './Home.css'
import problemsImg from '../../images/problemsImg.png'
import Header from '../../components/Header/Header'
import MenuCard from '../../components/MenuCard/MenuCard'

function Home() {
  return (
    <div className='home'>
        {/* header */}
        <Header />
        {/* menu links */}
        <MenuCard problemsImg={problemsImg} url={'/problems'}/>
        {/* <MenuCard problemsImg={problemsImg}/>
        <MenuCard problemsImg={problemsImg}/> */}
    </div>
  )
}

export default Home