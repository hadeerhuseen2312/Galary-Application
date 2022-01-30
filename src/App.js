import React, { useState } from 'react';
import Title from './comps/Title';
import UploadFile from './comps/UploadFile';
import ImageGrid from './comps/ImageGrid';
import Modal from './comps/Modal';


function App() {

  const [selectedImg,setSelectedImg]=useState(null);

  return (
    <div className="App">
      <Title />
      <UploadFile />
      <ImageGrid  setSelectedImg={setSelectedImg}/>
      {selectedImg&&<Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg}/>}
    </div>
  );
}

export default App;
