import React  from 'react';
import axios from 'axios';
import { Link, withRouter } from 'react-router-dom';

 import './App.css';
//import Product  from './components/Product/Product.js';
import UsersProduct from './components/UsersProduct/UsersProduct.js';
//import Registeration from './components/Registeration/Registeration.js';


//import { get } from 'mongoose';

class Home extends React.Component {

  state = {
    component: null,
    items:[],
    products: [],
    quanity:{id: null, q: 0}

  };
  // constructor(props){//syntax
  //    super(props);
  //   //getItems();
  // }
  // show the saved data in the home page
componentDidMount() {
 

  axios.get(`http://localhost:4000/products`)
  .then(res => {
    const products = res.data;
    this.setState({ products });
  })
//   axios
//   .post(`http://localhost:4000/product`, {
//     name, 
//     price,
//   })
//   .then(response => {
//     console.log(response)
//     this.setState({products: [...this.state.products, response.data]})
//     this.handleLangChange();
//   })
//   .catch(error => {
//     console.log('adding error', error);
  
//   });
// }
//   getItems(){
    // get items from db through axios 
    //  axios
    //  .get(`http://localhost:4000/products`)
        
      //  .then((response) =>{
      //   this.setState({products: [...this.state.products, response.data]})
      //  console.log(response.data);

      //  })
    //   .then((result) => {
    //     console.log(result.data);
    //      //when I have the data the user setState for the items;
    //     const items = result.data;
    //     this.setState({ products: items });
    //   })
    //   .catch((err) => {
    //   console.log("error",err);
    //  });
    
   
  }
  //show the add product form
 showAddPrdouctForm() {
    this.setState({
      component: <UsersProduct onSelectLanguage={this.handleLanguage}/>
    });
  };
  handleLanguage = (products) => {
    this.setState({products: products});
}

  addToCart = (product) => {
    console.log('productinfo : ',product);
     product.user_id = localStorage.getItem('user_id');
    var that = this;
    axios.post('http://localhost:4000/cart',product).then(data=>{
      console.log(data);
      that.props.history.push('/Cart');

    }).catch(err=>{
      console.log(err);
    })
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
              <p><br />Welcome to our our website.
         <br />We are group of farmers in the village,who sell organic and homemade dairy products.
         <br />If you like to know more about our products you can register and have account.If you already have an account you can log in and choose your favorite product.</p>
           
           

                {/* here is where the images in the home page  */}
                <ul className="products"> 
           
            
                     <img src="/images/cheese.jpg" alt="product"/>

                     <img src="/images/cow.jpg" alt="product"/>

                     <img src="/images/pure-ghee-1.jpg" width="275" height="180" alt="product"
                     />
           
           
           

                </ul>

              </div>
              <div>
              <div className="addcart">
          {this.state.products.map((product,i) => (
            <div className="" key={i}>
              <p key={i}>Name : {product.name} - Price : {product.price}</p>
              <input type = 'text'  onChange={(e) => this.setState({quanity:{id:product._id, q:e.target.value}})}></input>
              <button   onClick={
                () =>{
                  this.addToCart({product_id: product._id, quantity:parseInt(this.state.quanity.q)});
                }
              }>add to cart </button>
            </div>
          )   )}
        </div>
              </div>
              <br/>
             
             
               
                <button type='submit' className='btn' onClick={this.showAddPrdouctForm.bind(this)}>Add Product"Farmers"</button>
              <br />
              <br/>
              
          
              {/* <Router> */}
                 <div>
              <button>
            <Link to="/Registeration">Registeration</Link>
            </button>
              
            
              <button>
            <Link to="/Login">Log In</Link>
            </button> 
               </div>
               {/* </Router> */}
               
            </div>
            : this.state.component}
            <br/>
        <br/>
        </main>
        
        <footer className="footer">For more information call us at :059-999999</footer>
      </div>
    
    );
  }
};


export default withRouter(Home);