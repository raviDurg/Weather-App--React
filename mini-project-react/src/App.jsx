import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SearchBox from './SearchBox';
import InfoBox from './InfoBox';
import WeatherApp from './WeatherApp';

function App() {


  return (
    <>
    <div className='container' >
      {/* <SearchBox/>
      <InfoBox/> */}
      <WeatherApp/>
      </div>
    </>
  )
}

export default App
