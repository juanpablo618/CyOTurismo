import React from "react";
import axios from "axios"; 
import { RoomContext } from "../context";

class ReservationForm extends React.Component {

  constructor(props){
    super(props);
    this.state = {fIngreso: "", 
     fEgreso: "",
     cantPersonas: "", 
     serviciosAdicionales: "",
     KeyRoom:""
    
    };
  }

  componentWillMount() {
    console.log("ACA:");
    console.log(this.props);

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
 
  static contextType = RoomContext;

  render() {
    const { getRoom } = this.context;
    const room = getRoom(this.state.slug);

    return (
      <center>
        <form onSubmit={this.handleForm}>
              <br></br>
        <label htmlFor="fIngreso">Fecha de ingreso:</label><br></br>
        <input type="text" id="fIngreso" name="fIngreso" onChange={this.handleFields} /><br></br><br></br>
        
        <label htmlFor="fEgreso">Fecha de egreso:</label><br></br>
        <input type="text" id="fEgreso" name="fEgreso" onChange={this.handleFields} /><br></br><br></br>
 
        <label htmlFor="cantPersonas">Cantidad de personas</label><br></br>
        <input type="text" id="cantPersonas" name="cantPersonas" onChange={this.handleFields} /><br></br><br></br>
 
        <label htmlFor="serviciosAdicionales">¿Algun servicio en especial ?</label><br></br>
        <textarea name="serviciosAdicionales" id="serviciosAdicionales" onChange={this.handleFields}></textarea><br></br><br></br>
        
        <input type="hidden" id="KeyRoom" name="KeyRoom" value='${this.room}' />


        <button type="submit" className="btn-primary">Enviar</button>
      </form>
      </center>
  
    );
  }
}
 
export default ReservationForm;