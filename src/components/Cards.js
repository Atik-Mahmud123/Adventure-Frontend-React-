import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/im-10.jpg'
              text='Explore the hidden waterfall deep inside the Kuakata Beach'
              label='Adventure'
              path='/services'
            />
            <CardItem
              src='images/im-12.jpg'
              text='Travel through the Islands of Kuakata in a Private Cruise'
              label='Water'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/im-14.jpg'
              text='Set Sail in the Ratargul Canal visiting Uncharted Waters'
              label='Mystery'
              path='/services'
            />
            <CardItem
              src='images/im-15.jpg'
              text='Experience Cricket on Top of the Sylhety Mountains'
              label='Adventure'
              path='/products'
            />
            <CardItem
              src='images/im-11.jpg'
              text='Ride through the Kuakata Seashore on a guided horse tour'
              label='Adrenaline'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
