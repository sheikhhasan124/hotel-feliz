import React from 'react';
import img from '../../../imges/hotel.jpg'
import './HotelFeliz.css'

const HotelFeliz = () => {
    return (
        <div className='hotel-container'>
             <div className="hotel-desc width">
                <h2>Lorem ipsum dolor sit amet.</h2>
                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam ea architecto eos, tempora at ex obcaecati itaque, esse minima rerum beatae. Reprehenderit quibusdam commodi porro adipisci possimus. Iste error, nihil accusantium illum culpa sequi quis quam excepturi nulla eos reiciendis beatae harum facilis veniam possimus neque commodi adipisci explicabo exercitationem!</p>
             </div>
             <div className="hotel-img width">
                 <img src={img} alt="" />
             </div>
        </div>
    );
};

export default HotelFeliz;