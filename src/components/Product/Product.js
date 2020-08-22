import React from "react";
//import axios from "axios";
import { Table } from 'react-bootstrap';

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      price: "",
      count:""
    };
  }

  handelChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  

  render() {
    console.log(this.props);
    return (
      <div>
        {/* <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Count</th>
            </tr>
          </thead>
          <tbody>
            {this.props.productsCart.length > 0 ?this.props.productsCart.map((e, i) => (
              <tr key={i}>
                <td> {e.name}</td>
                <td> {e.price}</td>
                <td>{e.quantity}</td>
      
              </tr>
            )): 'No items in the Cart'}
          </tbody>
        </table> */}

        <Table striped bordered hover>
        <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Count</th>
            </tr>
          </thead>
          <tbody>
            {this.props.productsCart.length > 0 ?this.props.productsCart.map((e, i) => (
              <tr key={i}>
                <td> {e.name}</td>
                <td> {e.price}</td>
                <td>{e.quantity}</td>
      
              </tr>
            )): 'No items in the Cart'}
          
  
  </tbody>
</Table>
      </div>
    );
  }
}

export default Product;
