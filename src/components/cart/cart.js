import React from "react";
import axios from "axios";
import Products from "../Product/Product";
import {

 Link

} from "react-router-dom"
import Product from "../Product/Product";


class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  
  componentDidMount() {
    //TODO GET USER ID FROM LOCALSTORAGE 
    var user_id = localStorage.getItem('user_id');
    axios.post(`http://localhost:4000/carts`, {user_id: user_id} ).then((res) => {
      const items = res.data;
      console.log('cart iteeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeems',items);
      this.setState({ items});
    });
  }

  
  countAdd =()=>{
    this.setState.count++
  }

  handelChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  // handelSubmite(e) {
  //   e.preventDefault();
  //   console.log("Inside submit");
  //  const { name, price, count, total } = this.state;
  //   axios.get(`http://localhost:4000/products`).then((res) => {
  //     const productsCart = res.data;
  //     this.setState({ productsCart: productsCart });
  //   });
  // }

  render() {
    console.log(this.state.productsCart);

    return (
      <div className='inner-container'>
        <div className='h1'>
          <h1> </h1>
        </div>
        <br/>
        <br/>
        <h1 className='header'>Cart</h1>
          <hr className='hr' />
          <br />
          <br/>
          <br/>

      <div className="Cart">
        {this.state.items.length !== 0 ? (
          <Products productsCart={this.state.items} />
        ) : 'No items in the Cart'}
      </div>
      <br/>
      <br/>
      <button className="safa">
            <Link to="/Home">Go Home</Link>
            </button>
      <br/>
      <br/>
      <br/>
      <br/>

      <footer className="footer">Total : </footer>
      </div>
    );
  }
}

export default Cart;
