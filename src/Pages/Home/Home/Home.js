import React from 'react';
import HotelFeliz from '../HotelFeliz/HotelFeliz';
import Room from '../Rooms/Room/Room';
import './Home.css'

const Home = () => {
    return (
        <div>
           <p className='hotel-title'>Welcome to Hotel Feliz</p> 
           <HotelFeliz></HotelFeliz>
           <Room></Room>
        </div>
    );
};

export default Home;