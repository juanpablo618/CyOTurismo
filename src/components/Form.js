import React from "react";
import axios from "axios";

class Form extends React.Component {
  constructor(props){
    super(props);
    this.state = {name: "", surname: "", email: "", message: ""};
  }

  handleForm = e => {
    axios.post(
        "https://formcarry.com/s/yourFormId", 
        this.state, 
        {headers: {"Accept": "application/json"}}
      )
      .then(function (response) {
        
        // access response.data in order to check formcarry response
        if(response.data.success){
          // handle success
        } else {
          // handle error
          console.log(response.data.message);
        }

      })
      .catch(function (error) {
        console.log(error);
      });

    e.preventDefault();
  }

  handleFields = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <form onSubmit={this.handleForm}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" onChange={this.handleFields} />
        
        <label htmlFor="surname">Surname</label>
        <input type="text" id="surname" name="surname" onChange={this.handleFields} />
 
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" onChange={this.handleFields} />
 
        <label htmlFor="message">Your Message</label>
        <textarea name="message" id="message" onChange={this.handleFields}></textarea>
 
        <button type="submit">Send</button>
      </form>
    );
  }
}
 
export default Form;