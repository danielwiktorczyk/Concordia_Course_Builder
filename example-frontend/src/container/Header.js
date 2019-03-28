import React, { Component } from 'react';
import '../css/App.css';
import {withRouter} from "react-router-dom";
// import axios from "axios";

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {loggedIn: true};
        this.goToMyProfile = this.goToMyProfile.bind(this);
        this.goToSchedule = this.goToSchedule.bind(this);
        // this.logout = this.logout.bind(this);

    }
    goToMyProfile() {
        let path = '/MyProfile';
        this.props.history.push(path);
        window.location.reload();
    }

    goToSchedule(){
        let path = '/ViewMySchedule';
        this.props.history.push(path);
        window.location.reload();

    }
    //TODO: this logout function should be reviewed after it has been defined in BE

    // logout() {
    //     let name;
    //     let pass;
    //
    //     axios.post('http://localhost:8080/logout', {
    //         username: name,
    //         password: pass
    //     }).then(res => {
    //         this.setState({loggedIn: res.data});
    //         if (this.state.loggedIn === true) {
    //             this.state = {loggedIn: false};
    //             this.props.history.push("/");
    //         }
    //     }, err => {
    //         alert("Server rejected response: " + err);
    //     });
    // }

    render(){
        return (
            <div className="header">
                <ul>
                    <a className="btn header-buttons" onClick={this.goToMyProfile}>My Profile</a>
                    <a className="btn header-buttons" onClick={this.goToSchedule}>My Schedule</a>
                    <a className="btn header-buttons" >Logout</a>
                    {/*onClick={this.logout} to make the logout button log the user out on click*/}
                </ul>

            </div>
        );
    }
}
export default withRouter(Header);

