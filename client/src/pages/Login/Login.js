import React, { Component } from "react";
import { Input, FormBtn } from "../../components/Forms";
import Container from "../../components/Container";
import './Login.css';



class Register extends Component{
    state = {
        email: "",
        password: "",
      };
    
    
    render() {
        return (
            <Container fluid>
                <div class="row backgroundDos">
                    <div class="col-sm-10">
                        
                        <div class="row">
                            <div class="col-8 col-sm-6 new-user">
                                <h2>Don't have an accout</h2>
                                <p>Join now so you can start new projects and grow your network</p>
                                <button><a className="nav-link" href="/Register">Sign Up</a></button>
                            </div>
                        
                            <div class="col-4 col-sm-6 log-in-form">
                                <h1>Log in</h1>
                                <div className="form-style">
                                <Input
                                    // value={this.state.email}
                                    // onChange={this.handleInputChange}
                                    // name="email"
                                    placeholder="Email (required)"
                                />
                                <Input
                                    // value={this.state.password}
                                    // onChange={this.handleInputChange}
                                    // name="password"
                                    type="password"
                                    placeholder="Password (required)"
                                />
                                </div>

                                <FormBtn>
                                <a className="signUpbtn" href="/Profile" >Log in</a>
                                </FormBtn>
                                
                            </div>
                        </div>
                    
                    </div>
                </div>
            </Container>
       );
      }
    }
    
export default Register;