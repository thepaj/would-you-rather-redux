import React from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

import { handleAddQuestion } from '../actions/shared';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class AddQuestion extends React.Component {
    state = {
        textOne: '',
        textTwo: '',
        redirect: null
    }

    handleOptionOneChange = (e) => {
        const textOne = e.target.value;

        this.setState({
            textOne
        })
    }

    handleOptionTwoChange = (e) => {
        const textTwo = e.target.value;

        this.setState({
            textTwo
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const { authedUser } = this.props;

        if (this.state.textOne !== '' && this.state.textTwo !== '') {
            this.props.dispatch(handleAddQuestion(this.state.textOne, this.state.textTwo, authedUser));
        }

        this.setState({
            redirect: '/'
        })

    }

    onCancelClick = () => {
        this.setState({
            redirect: '/'
        })
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect} />
        }

        const { textOne, textTwo } = this.state;

        return (
            <div>
                <h1 className="main-title">Add question</h1>
                <Jumbotron className="add-question-container">
                    <h2 className="would-you-rather-text">Would you rather...</h2>

                    <Form>
                        <Row>
                            <Col>
                                <Form.Control
                                    as="textarea"
                                    placeholder="First Option"
                                    value={textOne}
                                    onChange={this.handleOptionOneChange}
                                />
                            </Col>
                            <Col>
                                <Form.Control
                                    as="textarea"
                                    placeholder="Second option"
                                    value={textTwo}
                                    onChange={this.handleOptionTwoChange}
                                />
                            </Col>
                        </Row>
                        <br />
                        <Row className="button-container">
                            <button
                                className="cancel-btn"
                                onClick={this.onCancelClick}>
                                Cancel
                                </button>
                            <button
                                className="submit-btn"
                                onClick={this.handleSubmit}
                                disabled={textOne === '' || textTwo === ''}>
                                Submit
                                </button>
                        </Row>
                    </Form>

                </Jumbotron>
            </div>
        )
    }
}

function mapStateToProps({ authedUser }) {
    return {
        authedUser
    }
}

export default connect(mapStateToProps)(AddQuestion);