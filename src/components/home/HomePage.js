import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component{
    render(){
        return(
            <div className="jumbotron">
                <h1>Trash Guide</h1>
                <p>Learn more about trash champs from League of Legends</p>
                <Link to="about" className="btn btn-primary btn-lg">About this trash site</Link>
            </div>
        );
    }
}
export default HomePage;