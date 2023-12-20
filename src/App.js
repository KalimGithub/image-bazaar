import React, {useState} from 'react';
import "./index.css";
import ImagesDisplay from './Components/ImagesDisplay';
import ImagesSearch from './Components/ImagesSearch';
import Header from './Components/Header';
const  App =() =>  {
  const [images, setImages] = useState([]);


  return (
    <div className="App">
      <Header />
      <ImagesSearch setImages={setImages} />
      <ImagesDisplay images={images}/>
    </div>
  );
}

export default App;
