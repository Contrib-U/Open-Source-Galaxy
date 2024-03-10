import React from 'react';
import './App.css';
import ElementOdd from './components/ElementOdd';
import Header from './components/Header';
import ElementEven from './components/ElementEven';
// import SearchBar from './components/SearchBar';
// import './assets/';


function importAll(r) {
  let images = {};
  // eslint-disable-next-line 
  r.keys().map(item => { images[item.replace('./', '')] = r(item); });
  return images;
}

const images = importAll(require.context('./assets', false, /\.(png|jpe?g)$/));



function App() {
  return (
    <div className="App">
      <Header/>
      
      <div className='row'>
        <ElementOdd name="Google Summer Of Code" src= {images['element_1.jpg']} link = "https://summerofcode.withgoogle.com/"/>
        <ElementEven name="MLH Fellowship" src={images['element-2.png']} link = "https://shorturl.at/cRVY7"/>
        <ElementOdd name="Google Summer Of Docs" src={images['element-3.png']} link = "https://developers.google.com/season-of-docs"/>
      </div>
      <div className='row'>
        <ElementEven name="Linux Kernal Mentorship" src={images['element-7.png']} link="https://wiki.linuxfoundation.org/lkmp"/>
        <ElementOdd name="Code Heat" src={images['element-8.png']} link="https://codeheat.org/" />
        <ElementEven name="Hacktober Fest" src={images['element-9.jpg']} link="https://hacktoberfest.com/" />
      </div>
      <div className='row'>
        <ElementOdd name="GirlScript SOC" src={images['element-4.jpg']} link="https://gssoc.girlscript.tech/" />
        <ElementEven name="Outreachy" src={images['element-5.png']} link="https://www.outreachy.org/" />
        <ElementOdd name="Summer of BitCoin" src={images['element-6.png']} link="https://www.summerofbitcoin.org/" />
      </div>
      
    </div>
  );
}

export default App;

// https://ibb.co/mHMxTKX
// https://ibb.co/8NRtCRv