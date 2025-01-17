import React, { useState } from 'react'; 
import './App.css'; 


  const App = () => { 
    const [isModalVisible, setIsModalVisible] = useState(false); 

  const toggleModal = () => { setIsModalVisible(!isModalVisible); }; 
  return ( 
  
  <div className="App"> <button onClick={toggleModal} 

  className="open-modal-btn"> Abrir Pop-up </button> 

  {isModalVisible && ( 
    <div className="modal"> 
    <div className="modal-content"> 
      <h1>Este é um novo pop-up!</h1> 
      <button onClick={toggleModal} className="close-modal-btn"> Fechar </button> 
      </div> 
      </div> )} 
      </div>
       ); }; 
      
      
      export default App;