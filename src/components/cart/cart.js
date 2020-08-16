import React from "react";
import axios from "axios";
import Products from "../Product/Product";
import {

 Link

} from "react-router-dom"


class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      price: "",
      // count: 0,
      // total: "",
      productsCart: null,
    };
  }

  
  componentDidMount() {
    axios.get(`http://localhost:4000/carts`).then((res) => {
      const productsCart = res.data;
      console.log(productsCart);
      this.setState({ productsCart });
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

  handelSubmite(e) {
    e.preventDefault();
    console.log("Inside submit");
    //const { name, price, count, total } = this.state;
    axios.get(`http://localhost:4000/products`).then((res) => {
      const productsCart = res.data;
      this.setState({ productsCart: productsCart });
    });
  }

  render() {
    console.log(this.state.productsCart);

    return (
      <div className='inner-container'>
        <div className='h1'>
          <h1>Dairy products  Milk and cheese </h1>
        </div>
        <h1 className='header'>Cart</h1>
          <hr className='hr' />
          <br />
      <div className="Cart">
        {this.state.productsCart ? (
          <Products productsCart={this.state.productsCart} />
        ) : null}
      </div>
      <br/>
      <br/>
      <button>
            <Link to="/Home">Go Home</Link>
            </button>
      <br/>

      <footer className="footer">Total : 2 $</footer>
      </div>
    );
  }
}

export default Cart;
