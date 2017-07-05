import React, {Component} from 'react';
import {Col, Alert, Collapse, Row} from 'react-bootstrap';
import _ from 'underscore';

import PropTypes from 'prop-types';

class Message extends Component {

    constructor(props) {
        super(props);
        this.state = {collapsed: true, open: false};
    }

    parseMensagemUsuario = () => {
        if (Array.isArray(this.props.mensagemUsuario)) {
            return _(this.props.mensagemUsuario).map(function(erro) {
                if (!!erro && !!erro.message) {
                    return (
                        <Col sm={12}
                            md={12}
                            lg={12}
                            key={erro.message}>
                            <Row>
                                <span>{erro.message}</span>
                            </Row>
                        </Col>
                    );
                } else {
                    return true;
                }
            });
        } else {
            return this.props.mensagemUsuario;
        }
    };

    render() {
        return (
            <div>
                <Alert bsStyle={this.props.tipoAlerta}>
                    <div className="row">
                        <Col sm={12}
                            md={12}>
                            <p className="lead">
                                { this.parseMensagemUsuario() }
                            </p>
                            <p>
                                { !!this.props.complemento ?
                                    this.props.complemento :
                                    "Favor entrar em contato com o suporte."}
                            </p>
                            <span className={this.state.collapsed ? 'fa fa-ellipsis-h' : 'fa fa-minus'}
                                onClick={() => this.setState({
                                    open: !this.state.open,
                                    collapsed: !this.state.collapsed
                                })}/>
                            <Collapse in={this.state.open}>
                                <div className="form-group">
                                    <span>
                                        {!!this.props.erroTecnico.status ?
                                            "Status: " + this.props.erroTecnico.status : ''}
                                    </span>
                                    <span>
                                        {!!this.props.erroTecnico.error ?
                                            ". Erro: " + this.props.erroTecnico.error : ''}
                                    </span>
                                    <span>
                                        { !!this.props.erroTecnico.message ?
                                            ". Mensagem: " + this.props.erroTecnico.message : ''}
                                    </span>
                                    <span>
                                        {!!this.props.erroTecnico.statement
                                            ? ". Statement: " + this.props.erroTecnico.statement : ''}
                                    </span>
                                    <span>
                                        {!!this.props.erroTecnico instanceof String
                                            ? "Erro: " + this.props.erroTecnico : ''}
                                    </span>
                                </div>
                            </Collapse>
                        </Col>
                    </div>
                </Alert>
            </div>
        )
    }
}

Message.propTypes = {
    tipoAlerta: PropTypes.string.isRequired,
    mensagemUsuario: PropTypes.any.isRequired,
    erroTecnico: PropTypes.object.isRequired,
    complemento: PropTypes.string
};

export default Message;