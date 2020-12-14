import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

class Answer extends React.Component {
    render() {
        const { question, authedUser, user } = this.props;

        return (
                <div className="question-container">
                    <div className='top-container'>
                        <img src={user.avatarURL} className="small-avatar" />
                        <div className="would-you-rather-text">Would you rather</div>
                    </div>
                    <div>
                        <div className="bottom-container">
                            {question.optionOne.votes.includes(authedUser) &&
                                <div className="first-answer-container">
                                    <p className="voted-answer">{question.optionOne.text}</p>
                                </div>
                            }
                            {!question.optionOne.votes.includes(authedUser) &&
                                <div className="first-answer-container">
                                    <p className="option-text">{question.optionOne.text}</p>
                                </div>
                            }
                            <div className='or-container'>
                                OR
                            </div>
                            {question.optionTwo.votes.includes(authedUser) &&
                                <div className="second-answer-container">
                                    <p className="voted-answer">{question.optionTwo.text}</p>
                                </div>
                            }
                            {!question.optionTwo.votes.includes(authedUser) &&
                                <div className="second-answer-container">
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