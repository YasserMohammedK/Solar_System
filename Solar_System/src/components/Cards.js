import React from 'react';
import './Cards.css';
import CardItem from './CardItem';


function Cards() {
  return (
    <div className='cards'>
      <h1>The latest news about the Milky Way galaxy</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
           
          <CardItem
              src='images/space-Article.jpg'
              text='Read this Article about the Space'
              label='space.com'
              path='https://www.space.com/34-image-day.html'
            />
              
              

              <CardItem
              src='images/moon-Article.jpg'
              text='Read The Latest Articles From NASA About The Moon'
              label='nasa.gov'
              path='https://moon.nasa.gov/news/articles/?page=0&per_page=40&order=publish_date+desc%2Ccreated_at+desc&search=&blank_scope=Latest'
            />
           
           
            
          </ul>
          <ul className='cards__items'>
          <CardItem
              src='images/mars-Article.jpg'
              text='Another First: Perseverance Captures the Sounds of Driving on Mars'
              label='nasa.gov'
              path='https://mars.nasa.gov/news/8892/another-first-perseverance-captures-the-sounds-of-driving-on-mars/'
            />
           <CardItem
              src='images/solarSystem-Article.png'
              text='In Depth | Our Solar System'
              label='solarsystem.nasa.gov'
              path='https://solarsystem.nasa.gov/solar-system/our-solar-system/in-depth/'
            />
            <CardItem
              src='images/sun.jpg'
              text="Earth's Sun Facts About the Sun's Age, Size and History"
              label="Sun's Facts"
              path='https://www.space.com/58-the-sun-formation-facts-and-characteristics.html'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;