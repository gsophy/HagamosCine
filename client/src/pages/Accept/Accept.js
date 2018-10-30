import React, { Component } from "react";
import { Input, FormBtn, TextArea } from "../../components/Forms";
import Container from "../../components/Container";
import './Accept.css'


class Profile extends Component {

    render(){
        return(
            <Container fluid>
                
                <div className="row profile-container" >
                    <div className="col-sm-10 white-box">

                        
                        <h1 className="yei"> You succesfully signed up  </h1>
                        <div className="boton">
                        <FormBtn>
                            <a className="login-next" href="/Login">Log in </a> 
                        </FormBtn>
                        </div>

                    </div>


                </div>

            </Container>
        )
    }


}


export default Profile;