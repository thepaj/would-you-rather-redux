import React from 'react';
import { connect } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron';
import { Link } from 'react-router-dom';

class QuestionDetail extends React.Component {
    render() {
        const { question, authedUser, optionOnePercentage, optionTwoPercentage } = this.props;

        return (
            <div>
                <Jumbotron
                    className="question-container">
                    <p>{question.author} asks</p>
                    <div>
                        <h3>Would you rather</h3>
                        {question.optionOne.votes.includes(authedUser) &&
                            <div>
                                <p className="voted-answer">{question.optionOne.text}</p>
                                <p>{optionOnePercentage}% voted for this option</p>
                            </div>
                        }
                        {!question.optionOne.votes.includes(authedUser) &&
                            <div>
                                <p>{question.optionOne.text}</p>
                                <p>{optionOnePercentage}% voted for this option</p>
                            </div>
                        }
                        <hr />
                        {question.optionTwo.votes.includes(authedUser) &&
                            <div>
                                <p className="voted-answer">{question.optionTwo.text}</p>
                                <p>{optionTwoPercentage}% voted for this option</p>
                            </div>
                        }
                        {!question.optionTwo.votes.includes(authedUser) &&
                            <div>
                                <p>{question.optionTwo.text}</p>
                                <p>{optionTwoPercentage}% voted for this option</p>
                            </div>
                        }
                    </div>
                    <Button
                        as={Link}
                        to="/"
                        variant="dark">
                        Back to the main page
                    </Button>
                </Jumbotron>
            </div>
        )
    }
}

function mapStateToProps({ questions, authedUser }, { id }) {
    const question = questions[id];
    const optionOneVotes = question.optionOne.votes.length;
    const optionTwoVotes = question.optionTwo.votes.length;

    const totalVotes = optionOneVotes + optionTwoVotes;

    const optionOnePercentage = Math.round((optionOneVotes * 100) / totalVotes);
    const optionTwoPercentage = Math.round((optionTwoVotes * 100) / totalVotes);

    return {
        authedUser,
        question,
        optionOnePercentage,
        optionTwoPercentage
    }
}

export default connect(mapStateToProps)(QuestionDetail);