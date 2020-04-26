import React from 'react';
import { connect } from 'react-redux';
import Button from 'react-bootstrap/Button';
import { handleVoteQuestion } from '../actions/questions';
import { handleSaveAnswer } from '../actions/users';
import Jumbotron from 'react-bootstrap/Jumbotron';
import { Link, withRouter } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

class Question extends React.Component {
    voteForOptionOne = () => {
        const { authedUser, question } = this.props;

        this.props.dispatch(handleVoteQuestion({
            authedUser,
            qid: question.id,
            answer: "optionOne"
        }))

        this.props.dispatch(handleSaveAnswer({
            authedUser,
            qid: question.id,
            answer: "optionOne"
        }))
    }

    voteForOptionTwo = () => {
        const { authedUser, question } = this.props;

        this.props.dispatch(handleVoteQuestion({
            authedUser,
            qid: question.id,
            answer: "optionTwo"
        }))

        this.props.dispatch(handleSaveAnswer({
            authedUser,
            qid: question.id,
            answer: "optionTwo"
        }))
    }

    render() {
        const { question, user } = this.props;

        return (
            <div>
                <Jumbotron className="question-container">
                    <div className='author-info'>
                        <Row>
                            <Col className="author-avatar-container">
                                <Image src={user.avatarURL} roundedCircle className="small-avatar" />
                            </Col>
                            <Col className="author-name-container">
                                <p>{user.name} asks:</p>
                            </Col>
                        </Row>
                    </div>
                    <div className="wyr-container">
                        <h3 className="would-you-rather-text">Would you rather</h3>
                        <Link to={`questions/${question.id}`}>
                            <div
                                className="option-container"
                                onClick={this.voteForOptionOne}>
                                <p className="option-text">
                                    {question.optionOne.text}
                                </p>
                            </div>
                        </Link>
                        <Link to={`questions/${question.id}`}>
                            <div
                                className="option-container"
                                onClick={this.voteForOptionTwo}>
                                <p className="option-text">
                                    {question.optionTwo.text}
                                </p>
                            </div>
                        </Link>
                    </div>
                </Jumbotron>
            </div>
        )
    }
}

function mapStateToProps({ questions, authedUser, users }, { id }) {
    const question = questions[id];
    const userIds = Object.keys(users);
    let user = null;

    for (let i = 0; i < userIds.length; i++) {
        if (userIds[i] === question.author) {
            user = users[userIds[i]]
        }
    }

    return {
        authedUser,
        question,
        user
    }
}

export default withRouter(connect(mapStateToProps)(Question));