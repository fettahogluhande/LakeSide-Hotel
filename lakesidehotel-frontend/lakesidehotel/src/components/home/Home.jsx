import React from 'react'
import MainHeader from '../layout/MainHeader'
import Parallax from '../common/Parallax'
import HotelService from "../common/HotelService"
import RoomCarousel from '../common/RoomCarousel'
import RoomSearch from '../common/RoomSearch'


const home = () => {
  return (
    <section>
     <MainHeader/>
        <section className='container'> 
          <RoomSearch/>
          <RoomCarousel/>
          <Parallax/>
          <RoomCarousel/>
          <HotelService/>
          <Parallax/>
          <RoomCarousel/>
        </section>
    </section>
  )
}

export default home