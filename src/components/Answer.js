import React from 'react';
import { connect } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link, withRouter } from 'react-router-dom';

class Answer extends React.Component {
    render() {
        const { question, authedUser, user } = this.props;

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
                    <div>
                        <div className="wyr-container">
                            <h3 className="would-you-rather-text">Would you rather</h3>
                            {question.optionOne.votes.includes(authedUser) &&
                                <div className="answer-container">
                                    <p className="voted-answer">{question.optionOne.text}</p>
                                </div>
                            }
                            {!question.optionOne.votes.includes(authedUser) &&
                                <div className="answer-container">
                                    <p className="option-text">{question.optionOne.text}</p>
                                </div>
                            }
                            {question.optionTwo.votes.includes(authedUser) &&
                                <div className="answer-container">
                                    <p className="voted-answer">{question.optionTwo.text}</p>
                                </div>
                            }
                            {!question.optionTwo.votes.includes(authedUser) &&
                                <div className="answer-container">
                                    <p className="option-text">{question.optionTwo.text}</p>
                                </div>
                            }
                        </div>
                        <Link to={`questions/${question.id}`}>
                            <button className="main-btn">
                                Click for details
                            </button>
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

export default withRouter(connect(mapStateToProps)(Answer));