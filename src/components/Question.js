import React from 'react';
import { connect } from 'react-redux';
import { handleVoteQuestion } from '../actions/questions';
import { handleSaveAnswer } from '../actions/users';
import { Link, withRouter } from 'react-router-dom';

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
            <div className="question-container">
                    <div className='top-container'>
                        <img src={user.avatarURL} className="small-avatar" />
                        <div className="would-you-rather-text">Would you rather</div>
                    </div>
                    <div className="bottom-container">
                        <Link to={`questions/${question.id}`}>
                            <button
                                className="first-option-container"
                                onClick={this.voteForOptionOne}>
                                    {question.optionOne.text}
                            </button>
                        </Link>
                        <div className='or-container'>
                            OR
                        </div>
                        <Link to={`questions/${question.id}`}>
                            <button
                                className="second-option-container"
                                onClick={this.voteForOptionTwo}>
                                    {question.optionTwo.text}
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

export default withRouter(connect(mapStateToProps)(Question));