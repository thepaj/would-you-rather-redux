import React from 'react';
import Form from 'react-bootstrap/Form';

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
                <div className="add-question-container">
                    <div className="add-question-content">
                    `   <h2 className="second-heading">Would you rather...</h2>
                        <Form>
                            <div className='form-container'>
                                <div>
                                    <Form.Control
                                        as="textarea"
                                        placeholder="First Option"
                                        value={textOne}
                                        onChange={this.handleOptionOneChange}
                                    />
                                </div>
                                <div>
                                    <Form.Control
                                        as="textarea"
                                        placeholder="Second option"
                                        value={textTwo}
                                        onChange={this.handleOptionTwoChange}
                                    />
                                </div>
                                <div className="button-container">
                                    <button
                                        className="submit-btn"
                                        onClick={this.handleSubmit}
                                        disabled={textOne === '' || textTwo === ''}>
                                        Submit
                                    </button>
                                    <button
                                        className="cancel-btn"
                                        onClick={this.onCancelClick}>
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        </Form>
                    </div>
                </div>
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