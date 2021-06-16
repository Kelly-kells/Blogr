import React from 'react'
import NavBar from './components/NavBar';
import Header from'./components/Header';
import Design from'./components/Design';
import Content from'./components/Content';
import Footer from './components/Footer';
import Content2 from './components/Content2';

const App = () => {
  return (
    <div>
      
    <NavBar />
    <Header />
    <div className="row">
      <div className="col-sm-4">
    <Content />

      </div >
      
      <div className="col-sm-4">  
    <Design />
    </div>

    <Footer />
   
      
      
      
    
    

      

    <Content2 />
      </div>
    </div>
    
  )
}


    

export default App;
