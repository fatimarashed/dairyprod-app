import React from 'react';
import axios from 'axios';

   

class UsersProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      price:'', 
      products: []
    };
  }
 
  handelChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  handleLangChange = () => {
    this.props.onSelectLanguage(this.state.products);            
}
  handelSubmite(e) {
    e.preventDefault();
    console.log("Inside submit")
    const { name, price } = this.state;
    axios
      .post(`http://localhost:4000/product`, {
        name, 
        price,
      })
      .then(response => {
        console.log(response)
        this.setState({products: [...this.state.products, response.data]})
        this.handleLangChange();
      })
      .catch(error => {
        console.log('adding error', error);
      
      });
    // axios
    //  .get(`http://localhost:4000/${this.state.name}`)
        
    //    .then((result) =>{setState})
    //    .catch((err) => {
    //    console.log("error",err);
    // });
    }
   
      
  
  


  render() {
    console.log(this.state.products)
    return (
      <div className='inner-container'>
        <div className='h1'> 
          <h1>Dairy products Milk and cheese</h1>
        </div>
        <div>
          {this.state.products.map((e,i) => (
          
            <p key={i}>name : {e.name} - price : {e.price}</p>
          )   )}
        </div>
        <form onSubmit={this.handelSubmite.bind(this)} className='box'>
          <h1 className='header'>Add Product</h1>
          <hr className='hr' />
          <br />
          <div className='input-group'>
            <input
              type='text'
              name='name'
              value={this.state.name}
              onChange={this.handelChange.bind(this)}
              className='adding-input'
              placeholder='name'
            />
          </div>
          <br />

          <div className='input-group'>
            <input
              type='text'
              name='price'
              value={this.state.price}
              onChange={this.handelChange.bind(this)}
              className='adding-input'
              placeholder='price'
            />
          </div>
          <br />

          
          <br />
          {/* <button type='submit' className='btn' onClick={this.showAddPrdouctForm.bind(this)}>add product</button> */}
          <button type='submit' className='btn' >add product</button>

          <br />
         
        </form>
      </div>
    );
  }
}

export default UsersProduct;
