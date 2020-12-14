import React from 'react';
import { connect } from 'react-redux';

class LeaderboardUser extends React.Component {
    render() {
        const { user, numberOfQuestions, numberOfAnswers, totalScore } = this.props;

        return (
            <div className='leaderboard-container'>
                <div className='leaderboard-user-container'>
                        <div className="leaderboard-column">
                            <p className="leaderboard-user-name">{user.name}</p>
                        </div>
                        <div className="leaderboard-column">
                            <p className="leaderboard-question-text">Questions asked: {numberOfQuestions}</p>
                            <p className="leaderboard-question-text">Questions answered: {numberOfAnswers}</p>
                            <hr className='line'/>
                            <p className="leaderboard-score-text">Total score: {totalScore}</p>
                        </div>
                    </div>
            </div>
        )
    }
}

function mapStateToProps({ users }, { id }) {
    const user = users[id];
    const numberOfQuestions = user.questions.length;
    const questionAnswered = user.answers;

    const numberOfAnswers = Object.keys(questionAnswered).length;

    const totalScore = numberOfAnswers + numberOfQuestions;

    return {
        user,
        numberOfQuestions,
        numberOfAnswers,
        totalScore
    }
}

export default connect(mapStateToProps)(LeaderboardUser);