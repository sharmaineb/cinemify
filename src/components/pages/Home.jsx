import React from 'react'
import Main from '../Main'
import Row from '../Row'
import Search from '../Search'
import requests from '../../Requests'

const Home = () => {
  return (
    <div className='bg-[#000000]'>
        <Main />
        <Search />
        {/* <Row rowId='6' title='Search' fetchURL={requests.requestSearch} /> */}
        <Row rowId='1' title='Now Playing' fetchURL={requests.requestNowPlaying} />
        <Row rowId='2' title='Upcoming' fetchURL={requests.requestUpcoming} />
        <Row rowId='3' title='Popular' fetchURL={requests.requestPopular} />
        <Row rowId='4' title='Trending' fetchURL={requests.requestTrending} />
        <Row rowId='5' title='Top Rated' fetchURL={requests.requestTopRated} />
        
        {/* change later/add */}
    </div>
  )
}

export default Home