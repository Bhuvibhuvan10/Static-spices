import React from 'react';
import logo from './logo.svg';
import '../src/appcss/App.css';
import Header from './profolio/header';
import HomeTabs from './profolio/HomeTab';
import Footer from './profolio/footer';


function App() {
  return (
    <div>
    <div className="app">
      <header className="app-header">
        <img src={logo}  
           className="app-logo" alt="logo" 
          />
        <Header />
      </header>
      <HomeTabs />
      </div>
    <div className='icons-List'><Footer/>
    </div></div>
  );
}

export default App;
