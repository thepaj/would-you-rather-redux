import React from 'react';
import { connect } from 'react-redux';
import Question from './Question';
import Answer from './Answer';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class QuestionList extends React.Component {
    render() {
        return (
            <div>
                <h1 className="main-title">Would you rather...?</h1>
                <Container>
                    <Row>
                        <Col>
                            <h2 className="second-heading">Questions</h2>
                            {this.props.unansweredQuestionsIds.map((id) => (
                                <li key={id} className="list-item">
                                    <Question
                                        id={id}
                                    />
                                </li>
                            ))}
                        </Col>
                        <Col>
                            <h2 className="second-heading">Your Answers</h2>
                            {this.props.answeredQuestionsIds.map((id) => (
                                <li key={id} className="list-item">
                                    <Answer id={id} />
                                </li>
                            ))}
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

function mapStateToProps({ questions, authedUser }) {

    const questionsIds = Object.keys(questions);

    const answeredQuestionsIds = questionsIds.filter((id) => {
        return questions[id].optionOne.votes.includes(authedUser) || questions[id].optionTwo.votes.includes(authedUser);
    })

    const unansweredQuestionsIds = questionsIds.filter((id) => {
        return !questions[id].optionOne.votes.includes(authedUser) && !questions[id].optionTwo.votes.includes(authedUser);
    })

    return {
        answeredQuestionsIds,
        unansweredQuestionsIds
    }
}

export default connect(mapStateToProps)(QuestionList);