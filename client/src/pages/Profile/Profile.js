import React, { Component } from "react";
import { Input, FormBtn, TextArea } from "../../components/Forms";
import Container from "../../components/Container";
import './Profile.css'


class Profile extends Component {

    render(){
        return(
            <Container fluid>
                <h1 className="h1"> FINISH YOUR PROFILE </h1>
                <h2 className="h2">Step 1</h2>
                <h3 className="h3">General information</h3>
                <div className="row profile-container" >
                    <div className="col-sm-10 white-box">

                        <div className="row ">

                            <div className="profile-pic">
                                <div className="image">
                                    <img src="../img/user.png"></img>
                                </div>
                                <FormBtn>Add image</FormBtn>
                                <TextArea
                                    placeholder="Bio"
                                />
                            </div>
                            <div className="initial-info">
                                <Input
                                    placeholder="Dionne Gonzalez"
                                />
                                <Input
                                    placeholder="dionne@gonzalez.com"
                                />
                                <Input
                                    placeholder="Producer"
                                />
                                 <Input
                                    placeholder="birth date MM/DD/YYYY"
                                    type="date"
                                />
                                <Input
                                    placeholder="gender"
                                />
                                <Input
                                    placeholder="where do you live"
                                />
                              
                              <FormBtn>Continue...</FormBtn>

                            </div>
                        </div>


                    </div>


                </div>

            </Container>
        )
    }


}


export default Profile;