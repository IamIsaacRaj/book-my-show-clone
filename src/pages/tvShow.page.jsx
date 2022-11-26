import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PosterSlider from "../components/PosterSlider/PosterSlider.Component"

import DefaultLayoutHoc from "../layouts/Default.layout";

//Components

import PlayFilter from "../components/PlayFilters/PlayFilters.Component";
import ShowCarousel from '../components/HeroCarousel/ShowCarousel.Component';
import Poster from '../components/Poster/Poster.Component';

const PlayPage = () => {
  const [recomendedTvShows, setRecomendedTvShows] = useState([]);

  const [premierTvShows, setPremierTvShows] = useState([]);

  const [onlineStreamEvents, setOnlineStreamEvents] = useState([]);

  useEffect(() => {
    const requestPopularTvShows = async() => {
      const getPopularTvShows = await axios.get('/tv/popular');

      setRecomendedTvShows(getPopularTvShows.data.results);
    }
    requestPopularTvShows()
  }, []);

  useEffect(() => {
    const requestTopRatedTvShows= async() => {
      const getTopRatedTvShows= await axios.get('/tv/top_rated');
      setPremierTvShows(getTopRatedTvShows.data.results);
    }
    requestTopRatedTvShows()
  }, []);

  useEffect(() => {
    const requestPopularTvShows = async() => {
      const getPopularTvShows = await axios.get('/tv/popular');
      setOnlineStreamEvents(getPopularTvShows.data.results);
    }
    requestPopularTvShows()
  }, []);
  return (
    <>
    <ShowCarousel/> 
    <div className='lg:flex px-3  gap-2  md:px-10 lg:px-10 mt-5'>
    <div className="lg:w-1/4 p-4 bg-white rounded">
            <h2 className="text-2xl font-bold mb-4">Filters</h2>
            <div>
              <PlayFilter
                title="Date"
                tags={["Today", "Tomorrow", "This Weekend"]}
              />
            </div>
            <div>
              <PlayFilter
                title="Language"
                tags={["English", "Hindi", "Tamil"]}
              />
            </div>
          </div>
          <div className='lg:w-3/4'>
            <div className='grid bg-white rounded  grid-cols-2 lg:grid-cols-4 md:grid-cols-3  lg:gap-3 gap-2 w-full  '>
            <h1 className='font-bold text-2xl my-4 col-span-2 lg:col-span-4 md:col-span-3 sm:col-span-3'>Recommended WebSeries</h1>
                
                {recomendedTvShows.map((each,index) =>(
                
                    <Poster 
                    isPlay={true} 
                    isDark={false} 
                    title={each.title} 
                    poster_path= {each.poster_path} 
                    id={each.id}
                    key={index} />
                    
                ))}
            </div>
            <div className='grid bg-white rounded  grid-cols-2 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-3 gap-3 px-2 lg:px-5  md:px-5 w-full  lg:w-4/5  '>
            <h1 className='font-bold text-2xl my-4 col-span-2 lg:col-span-4 md:col-span-3 sm:col-span-3'>TopRated WebSeries</h1>
                {premierTvShows.map((each,index) =>(
                    
                    <Poster 
                    isPlay={true} 
                    isDark={false} 
                    title={each.title} 
                    poster_path= {each.poster_path} 
                    id={each.id}
                    key={index} />
                  
                ))}
            </div>
            <div className='grid bg-white rounded  grid-cols-2 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-3 gap-3 px-2 lg:px-5  md:px-5 w-full  lg:w-4/5  '>
            <h1 className='font-bold text-2xl my-4 col-span-2 lg:col-span-4 md:col-span-3 sm:col-span-3'>Popular WebSeries</h1>
                {onlineStreamEvents.map((each,index) =>(
                    
                    <Poster 
                    isPlay={true} 
                    isDark={false} 
                    title={each.title} 
                    poster_path= {each.poster_path} 
                    id={each.id}
                    key={index} />
                    
                ))}
            </div>
          </div>
        </div>
    </>
  );
};

export default DefaultLayoutHoc(PlayPage);