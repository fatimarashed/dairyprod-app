import React from "react";
import axios from "axios";
import { Link, withRouter } from "react-router-dom";

import {
  Card,
  ListGroup,
  ListGroupItem,
  Button,
  FormControl,
  Form,
  Container,
  Row,
  Col,
  CardDeck,
} from "react-bootstrap";
import "./App.css";
//import Product  from './components/Product/Product.js';
import UsersProduct from "./components/UsersProduct/UsersProduct.js";

//import Registeration from './components/Registeration/Registeration.js';

//import { get } from 'mongoose';

class Home extends React.Component {
  state = {
    component: null,
    items: [],
    products: [],
    quanity: { id: null, q: 0 },
  };

  // show the saved data in the home page
  componentDidMount() {
    axios.get(`http://localhost:4000/products`).then((res) => {
      const products = res.data;
      this.setState({ products });
    });
  }
  //show the add product form
  showAddPrdouctForm() {
    this.setState({
      component: <UsersProduct onSelectLanguage={this.handleLanguage} />,
    });
  }
  handleLanguage = (products) => {
    this.setState({ products: products });
  };

  addToCart = (product) => {
    console.log("productinfo : ", product);
    product.user_id = localStorage.getItem("user_id");
    var that = this;
    axios
      .post("http://localhost:4000/cart", product)
      .then((data) => {
        console.log(data);
        that.props.history.push("/Cart");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    var counter = 0;
    var component;
    console.log(this.state);
    return (
      <div className="grid-container">
        <main className="main">
          {this.state.component == null ? (
            <div className="content">
              <div className="about">
                <p>
                  <br />
                  Welcome to our our website.
                  <br />
                  We are group of farmers in the village,who sell organic and
                  homemade dairy products.
                  <br />
                  If you like to know more about our products you can register
                  and have account.If you already have an account you can log in
                  and choose your favorite product.
                </p>
              </div>

              {/* here is where the images in the home page  */}
              {/* <ul className="products"> 
           
            
                     <img src="/images/cheese.jpg" alt="product"/>

                     <img src="/images/cow.jpg" alt="product"/>

                     <img src="/images/pure-ghee-1.jpg" width="275" height="180" alt="product"
                     />
           
           
           

                </ul> */}
              <Container className="c1" fluid="md">
                {this.state.products.map((product, i) => {
                  counter++;
                  if (counter == 1) {
                    return (
                      <Row key={i}>
                        {this.state.products[i]?
                        <Col>
                          <CardDeck>
                            <Card>
                              <Card.Header className="header1">
                                Dairy Product
                              </Card.Header>
                              <Card.Body>
                                <Card.Title>Product</Card.Title>
                                <ListGroup className="list-group-flush">
                                  <ListGroupItem>
                                    Name : {this.state.products[i]?this.state.products[i].name:""}
                                  </ListGroupItem>
                                  <ListGroupItem>
                        
                                    Price : {this.state.products[i]?this.state.products[i].price:""}
                                  </ListGroupItem>
                                </ListGroup>

                                <Form inline>
                                  <FormControl type="text" placeholder="count" className="mr-sm-2"  onChange={(e) => this.setState({quanity:{id:this.state.products[i]._id, q:e.target.value}})}/>

<Button
                                              variant="info"
                                              onClick={() => {
                                                this.addToCart({
                                                  product_id: product._id,
                                                  quantity: parseInt(this.state.quanity.q),
                                                });
                                              }}
                                            >
                                              add to cart
                                            </Button>
                                  
                                </Form>
                              </Card.Body>
                            </Card>
                          </CardDeck>
                        </Col>
                        :<Col></Col>}
                          {this.state.products[i +1]?
                        <Col>
                          <CardDeck>
                            <Card>
                              <Card.Header className="header1">
                                Dairy Product
                              </Card.Header>
                              <Card.Body>
                                <Card.Title>Product</Card.Title>
                                <ListGroup className="list-group-flush">
                                  <ListGroupItem>
                                    Name : {this.state.products[i + 1]?this.state.products[i + 1].name:""}{" "}
                                  </ListGroupItem>
                                  <ListGroupItem>
                                    {" "}
                                    Price : {this.state.products[i + 1]?this.state.products[i + 1].price:""}
                                  </ListGroupItem>
                                </ListGroup>

                                <Form inline>
                                  <FormControl
                                    type="text"
                                    placeholder="count"
                                    className="mr-sm-2"
                                    onChange={(e) =>
                                      this.setState({
                                        quanity: {
                                          id: this.state.products[i + 1]?this.state.products[i + 1]._id:"",
                                          q: e.target.value,
                                        },
                                      })
                                    }
                                  />

                                  <Button
                                    variant="success"
                                    onClick={() => {
                                      this.addToCart({
                                        product_id: this.state.products[i + 1]?this.state.products[i + 1]
                                          ._id:"",
                                        quantity: parseInt(
                                          this.state.quanity.q
                                        ),
                                      });
                                    }}
                                   
                                  >
                                    add to cart
                                  </Button>
                                </Form>
                              </Card.Body>
                            </Card>
                          </CardDeck>
                        </Col>
                         :<Col></Col>}
                            {this.state.products[i +2]?
                        <Col>
                          <CardDeck>
                            <Card>
                              <Card.Header className="header1">
                                Dairy Product
                              </Card.Header>
                              <Card.Body>
                                <Card.Title>Product</Card.Title>
                                <ListGroup className="list-group-flush">
                                  <ListGroupItem>
                                    Name : {this.state.products[i + 2]?this.state.products[i + 2].name:""}{" "}
                                  </ListGroupItem>
                                  <ListGroupItem>
                                    {" "}
                                    Price : {this.state.products[i + 2]?this.state.products[i + 2].price:""}
                                  </ListGroupItem>
                                </ListGroup>

                                <Form inline>
                                  <FormControl
                                    type="text"
                                    placeholder="count"
                                    className="mr-sm-2"
                                    onChange={(e) =>
                                      this.setState({
                                        quanity: {
                                          id: this.state.products[i + 2]?this.state.products[i + 2]._id:"",
                                          q: e.target.value,
                                        },
                                      })
                                    }
                                  />

                                  <Button
                                    variant="success"
                                    onClick={() => {
                                      this.addToCart({
                                        product_id:  this.state.products[i + 2]?this.state.products[i + 2]._id:'',
                                        quantity: parseInt(
                                          this.state.quanity.q
                                        ),
                                      });
                                    }}
                                  >
                                    add to cart
                                  </Button>
                                </Form>
                              </Card.Body>
                            </Card>
                          </CardDeck>
                        </Col>
                         :<Col></Col>}
                      </Row>
                    );
                  } else {
                    counter++;
                    if (counter == 3) {
                      counter = 0;
                    }
                    return;
                  }
                  //             return (
                  //               <div className="" key={i}>
                  //                 {/* <Row> */}
                  //                 {/* <Col> */}
                  //                 <Col>
                  //                   <CardDeck>
                  //                     <Card>
                  //                       <Card.Header className="header1">
                  //                         Dairy Product
                  //                       </Card.Header>
                  //                       <Card.Body>
                  //                         <Card.Title>Product</Card.Title>
                  //                         <ListGroup className="list-group-flush">
                  //                           <ListGroupItem>
                  //                             Name : {product.name}{" "}
                  //                           </ListGroupItem>
                  //                           <ListGroupItem>
                  //                             {" "}
                  //                             Price : {product.price}
                  //                           </ListGroupItem>
                  //                         </ListGroup>
                  //                         {/* <Card.Text>
                  // Name : {product.name}
                  // </Card.Text>

                  // <Card.Text>
                  // Price : {product.price}
                  // </Card.Text> */}

                  //                         <Form inline>
                  //                           <FormControl
                  //                             type="text"
                  //                             placeholder="count"
                  //                             className="mr-sm-2"
                  //                             onChange={(e) =>
                  //                               this.setState({
                  //                                 quanity: {
                  //                                   id: product._id,
                  //                                   q: e.target.value,
                  //                                 },
                  //                               })
                  //                             }
                  //                           />

                  //                           <Button
                  //                             variant="success"
                  //                             onClick={() => {
                  //                               this.addToCart({
                  //                                 product_id: product._id,
                  //                                 quantity: parseInt(this.state.quanity.q),
                  //                               });
                  //                             }}
                  //                           >
                  //                             add to cart
                  //                           </Button>
                  //                         </Form>
                  //                       </Card.Body>
                  //                     </Card>
                  //                   </CardDeck>
                  //                 </Col>
                  //                 {/* </Col> */}

                  //                 {/* </Row>    */}

                  //                 {/* <Card>
                  //            <Card.Header>Dairy Product</Card.Header>
                  //            <Card.Body>
                  //               <Card.Title>Product</Card.Title>
                  //               <ListGroup className="list-group-flush">
                  //                  <ListGroupItem>Name : {product.name} </ListGroupItem>
                  //                  <ListGroupItem> Price : {product.price}</ListGroupItem>

                  //               </ListGroup>
                  //               <Form inline>
                  //                 <FormControl type="text" placeholder="count" className="mr-sm-2"  onChange={(e) => this.setState({quanity:{id:product._id, q:e.target.value}})}/>

                  //              <Button variant="outline-light" onClick={
                  //           () =>{
                  //             this.addToCart({product_id: product._id, quantity:parseInt(this.state.quanity.q)});
                  //           }
                  //         }>add to cart</Button>
                  //         </Form>
                  //            </Card.Body>
                  //         </Card> */}

                  //                 {/* <p key={i}>Name : {product.name} - Price : {product.price}</p>

                  //         <input type = 'text'  onChange={(e) => this.setState({quanity:{id:product._id, q:e.target.value}})}></input>
                  //         <button   onClick={
                  //           () =>{
                  //             this.addToCart({product_id: product._id, quantity:parseInt(this.state.quanity.q)});
                  //           }
                  //         }>add to cart </button> */}
                  //               </div>
                  //             );
                })}
              </Container>
              <br />

              <button
                type="submit"
                className="btn"
                onClick={this.showAddPrdouctForm.bind(this)}
              >
                Add Product"Farmers"
              </button>
              <br />
              <br />

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
          ) : (
            this.state.component
          )}
          <br />
          <br />
        </main>

        <footer className="footer">
          For more information call us at :059-999999
        </footer>
      </div>
    );
  }
}

export default withRouter(Home);
