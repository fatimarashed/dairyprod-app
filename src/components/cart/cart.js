import React from 'react';
import axios from 'axios';


i
class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: '',
     
    };
  }

  handelChange(e) {
    this.setState({
      [e.target.total]: e.target.value,
    });
  }
  
}

export default withRouter(Registration);
