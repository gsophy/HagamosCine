import React, { Component } from "react";
import { Input, FormBtn } from "../../components/Forms";
import Container from "../../components/Container";
import './Register.css'


class Register extends Component{
    state = {
        name: "",
        email: "",
        profession: "",
        password: "",
      };
    
    render() {
        return (
            <Container fluid>
                <div className="row backgroundUno" >
                    <div className="col-sm-10">
                    
                        <div className="row">
                            <div className="col-6 col-sm-6 sign-up-form">
                            <h1>SIGN UP</h1>
                                <div className="form-style">
                                <form onSubmit={this.handleSubmit}>
                                <Input
                                    // value={this.state.name}
                                    // onSubmit={this.handleSubmit}
                                    // onChange={this.handleInputChange}
                                    // name="name"
                                    placeholder="Full Name (required)"
                                />
                                <Input
                                    // value={this.state.email}
                                    // onChange={this.handleInputChange}
                                    // name="email"
                                    placeholder="Email (required)"
                                />
                                <Input
                                    // value={this.state.profession}
                                    // onChange={this.handleInputChange}
                                    // name="profession"
                                    placeholder="Profession(required)"
                                />
                                <Input
                                    // value={this.state.password}
                                    // onChange={this.handleInputChange}
                                    // name="password"
                                    type="password"
                                    placeholder="Password (required)"
                                />
                                </form>
                                </div>
                                


                                <FormBtn>
                                    <a className="signUpbtn" href="/Accept" >Sign up</a>
                                </FormBtn>
                            </div>

                        </div>
                        <div class="col-6 col-sm-6 already-a-user">
                            <h2>Have already an account</h2>
                            <p>Start connecting with film projects.</p>
                            <button><a className="nav-link" href="/Login">Login</a></button>
                        </div>
                    </div>
                </div>

            </Container>
       );
      }
    }
    
export default Register;