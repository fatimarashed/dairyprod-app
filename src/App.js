import React from 'react';

import './App.css';

function App() {
  return (
    
      <div className="grid-container">
        <header className="container">
          <h1 className="header1">Dairy For all<br/>Milk and Cheese </h1>
         
        </header>
       
        <main className="main">
          <div className="content">
            
            <ul className="products"> 
           
            
              <img src="/images/cheese.jpg" alt="product"/>

              <img src="/images/cow.jpg" alt="product"/>

              <img src="/images/pure-ghee-1.jpg" width="275" height="180" alt="product"
               />
              
              
              

            </ul>
          </div>

         <p><br/>Welcome to our our website.
         <br/>We are group of farmers in the village,who sell organic and homemade dairy products.
         <br/>If you like to know more about our products you can register and have account.If you already have an account you can log in and choose your faovtite</p>
         <br />
          <button type='submit' class='btn'>
            Register
          </button>
          <br />
          <br />
          <button type='submit' class='btn'>
            Log in
          </button>
          <br />
        </main>
        <footer className="footer">For more information call us at :059-999999</footer>
      </div>
   
  );
}

export default App;
