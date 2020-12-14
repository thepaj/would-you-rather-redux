import React from 'react';
import { connect } from 'react-redux';
import Jumbotron from 'react-bootstrap/Jumbotron';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

class QuestionDetail extends React.Component {
    render() {
        const { question, authedUser, optionOnePercentage, optionTwoPercentage, user } = this.props;

        return (
            <div>
                <h3 className="second-heading">Question Overview</h3>
                <Jumbotron
                    className="question-container">
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
                        <h3 className="would-you-rather-text">Would you rather</h3>
                        {question.optionOne.votes.includes(authedUser) &&
                            <div className="answer-container">
                                <p className="voted-answer">{question.optionOne.text}</p>
                                <p className="percentage-text">{optionOnePercentage}% voted for this option</p>
                            </div>
                        }
                        {!question.optionOne.votes.includes(authedUser) &&
                            <div className="answer-container">
                                <p className="option-text">{question.optionOne.text}</p>
                                <p className="percentage-text">{optionOnePercentage}% voted for this option</p>
                            </div>
                        }
                        {question.optionTwo.votes.includes(authedUser) &&
                            <div className="answer-container">
                                <p className="voted-answer">{question.optionTwo.text}</p>
                                <p className="percentage-text">{optionTwoPercentage}% voted for this option</p>
                            </div>
                        }
                        {!question.optionTwo.votes.includes(authedUser) &&
                            <div className="answer-container">
                                <p className="option-text">{question.optionTwo.text}</p>
                                <p className="percentage-text">{optionTwoPercentage}% voted for this option</p>
                            </div>
                        }
                    </div>
                    <Link to='/'>
                        <button
                            className="main-btn">
                            Back to the main page
                        </button>
                    </Link>
                </Jumbotron>
            </div>
        )
    }
}

function mapStateToProps({ questions, authedUser, users }, { id }) {
    const question = questions[id];
    const optionOneVotes = question.optionOne.votes.length;
    const optionTwoVotes = question.optionTwo.votes.length;

    const totalVotes = optionOneVotes + optionTwoVotes;

    const optionOnePercentage = Math.round((optionOneVotes * 100) / totalVotes);
    const optionTwoPercentage = Math.round((optionTwoVotes * 100) / totalVotes);

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
        optionOnePercentage,
        optionTwoPercentage,
        user
    }
}

export default connect(mapStateToProps)(QuestionDetail);