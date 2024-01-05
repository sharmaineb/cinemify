import React from 'react'
import Main from '../Main'
import Row from '../Row'
import requests from '../../Requests'

const Home = () => {
  return (
    <div>
        <Main />
        <Row title='Now Playing' fetchURL={requests.requestNowPlaying} />
        <Row title='Upcoming' fetchURL={requests.requestUpcoming} />
        <Row title='Popular' fetchURL={requests.requestPopular} />
        <Row title='Trending' fetchURL={requests.requestTrending} />
        <Row title='Top Rated' fetchURL={requests.requestTopRated} />
        {/* change later/add */}
    </div>
  )
}

export default Home