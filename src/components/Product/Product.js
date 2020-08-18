import React from "react";
//import axios from "axios";

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
  // handelSubmite(e) {
  //   e.preventDefault();
  //   const { name, price } = this.state;
  //   axios
  //     .post(`http://localhost:4000/product`, {
  //       name,
  //       price,
  //     })
  //     .then((response) => {
  //       console.log(response);
  //       /*if (response.data) {
  //         console.log('NOW ADD YOUR PRODUCT');
  //        this.props.setUserAuth(true);
  //         alert('NOW ADD YOUR PRODUCT ');
  //         this.props.history.push('/auth/add');
  //       }*/
  //     })
  //     .catch((error) => {
  //       console.log("adding error", error);
  //       /* alert('THIS PRODUCT IS ALREADY ADDED TRY ANOTHER ONE');
  //       this.props.setUserAuth(false);
  //       this.setState({
  //         name:''
  //       })*/
  //     });
  // }

  render() {
    console.log(this.props);
    return (
      <div>
        <table>
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
        </table>
        {/* <div className="inner-container">
          <div className="h1">
            <h1>Dairy products Milk and cheese</h1>
          </div>
          <form onSubmit={this.handelSubmite.bind(this)} className="box">
            <h1 className="header">Add Product</h1>
            <hr className="hr" />
            <br />
            <div className="input-group">
              <input
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.handelChange.bind(this)}
                className="adding-input"
                placeholder="name"
              />
            </div>
            <br />

            <div className="input-group">
              <input
                type="text"
                name="price"
                value={this.state.price}
                onChange={this.handelChange.bind(this)}
                className="adding-input"
                placeholder="price"
              />
            </div>
            <br />

            <br />
            <button className="btn">Add product</button>
            <br />
          </form>
        </div> */}
      </div>
    );
  }
}

export default Product;
