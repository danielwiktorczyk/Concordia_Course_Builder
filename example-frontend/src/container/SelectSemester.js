import React, { Component } from 'react';
import '../css/App.css';
import {withRouter} from "react-router-dom";
import {BrowserRouter as Router} from 'react-router-dom';
import Header from './Header';

class SelectSemester extends Component {
    render() {
        return (
            <div>
                <Router ClassName="header-fix">
                    <Header />
                </Router>
                <div className="container-  select-semester">

                    <div className="container-">
                        <img className="logo semester" src={require("../assets/SOEN.jpg")} alt="SOEN SCHEDULER BUILDER"/>
                    </div>
                    <h3>Visualize possible schedules for a selection of courses to quickly plan your semester!</h3>
                    <hr/>
                    <h2>Select a semester to start</h2>
                    <hr/>
                    <div className="wrapper row select-semester-button">
                        <button className="col-2 btn btn-home-log" onClick={this.routeChange}>Summer 2018</button>
                        <button className="col-2 btn btn-home-log" onClick={this.routeChange}>Fall 2018</button>
                        <button className="col-2 btn btn-home-log" onClick={this.routeChange}>Winter 2019</button>
                        <button className="col-2 btn btn-home-log" onClick={this.routeChange}>Fall / Winter 2019</button>
                    </div>
                </div>
            </div>

    );
    }

    constructor(props) {
        super(props);
            this.state = {loggedIn: true};
            this.routeChange = this.routeChange.bind(this);

    };

    routeChange() {
        let path = '/SelectCourse';
        this.props.history.push(path);
    }
}
export default withRouter(SelectSemester);
