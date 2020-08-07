import React from 'react';
import axios from 'axios';

import './App.css';
//import Product  from './components/Product/Product.js';
import UsersProduct from './components/UsersProduct/UsersProduct.js';
import { get } from 'mongoose';

class App extends React.Component {

  state = {
    component: null,
    items:[]
  };
  constructor(props){//syntax
    super(props);
    //getItems();
  }

  getItems(){
    // get items from db through axios 
     axios
     .get(`http://localhost:4000/${this.state.name}`)
        
       .then((response) =>{
        this.setState({products: [...this.state.products, response.data]})

       })
      .catch((err) => {
      console.log("error",err);
     });
     //when I have the data the use setState for the items;
  }
 showAddPrdouctForm() {
    this.setState({
      component: <UsersProduct onSelectLanguage={this.handleLanguage}/>
    });
  };
  handleLanguage = (products) => {
    this.setState({products: products});
}

  render() {
    console.log(this.state)
    return (

      <div className="grid-container">
        <header className="container">
          <h1 className="header1">Dairy For all<br />Milk and Cheese </h1>

        </header>

        <main className="main">

          {this.state.component == null ?
            <div>
              <div className="content">

                {/* here is where the images in the home page  */}

              </div>
              <div>
                
              </div>
              <p><br />Welcome to our our website.
         <br />We are group of farmers in the village,who sell organic and homemade dairy products.
         <br />If you like to know more about our products you can register and have account.If you already have an account you can log in and choose your faovtite</p>
              <br />
           
              <button type='submit' className='btn'>
                Register
          </button> <button type='submit' className='btn' onClick={this.showAddPrdouctForm.bind(this)}>add product</button>
              <br />
              <br />
              <button type='submit' className='btn'>
                Log in
          </button>
              <br />
            </div>
            : this.state.component}
        </main>
        <footer className="footer">For more information call us at :059-999999</footer>
      </div>

    );
  }
};


export default App;
