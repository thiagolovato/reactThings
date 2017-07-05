import React, {Component} from 'react';
import {Jumbotron} from 'react-bootstrap';

class Forbidden extends Component {

    render() {
        return (
            <div>
                <Jumbotron>
                    <h1>Você não tem permissão para acessar este sistema.</h1>
                </Jumbotron>
            </div>
        )
    }
}

export default Forbidden;