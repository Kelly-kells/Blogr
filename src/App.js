import React from 'react'
import NavBar from './components/NavBar';
import Header from'./components/Header';
import Design from'./components/Design';
import Content from'./components/Content';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      
    <NavBar />
    <Header />
    <div className="row">
      <div className="col-sm-6">
    <Content />

      </div >
      <div className="col-sm-6">
        
    <Design />
      </div>
      <div>

      <Footer />
      </div>
    </div>
    
    
    </div>
  )
}


    

export default App;
