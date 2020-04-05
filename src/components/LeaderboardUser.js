import React from 'react';
import { connect } from 'react-redux';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class LeaderboardUser extends React.Component {
    render() {
        const { user, numberOfQuestions, numberOfAnswers, totalScore } = this.props;

        return (
            <div>
                <Row>
                    <Col>
                        <p>{user.name}</p>
                        <hr />
                        <p>Questions asked: {numberOfQuestions}</p>
                        <p>Questions answered: {numberOfAnswers}</p>
                    </Col>
                    <Col>
                        <p>Total score: {totalScore}</p>
                    </Col>
                </Row>
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