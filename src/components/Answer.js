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
                            <Col>
                                <Image src={user.avatarURL} roundedCircle className="small-avatar" />
                            </Col>
                            <Col className="user-name">
                                <p>{user.name} asks:</p>
                            </Col>
                        </Row>
                    </div>
                    <div>
                        <h3>Would you rather</h3>
                        {question.optionOne.votes.includes(authedUser) &&
                            <div>
                                <p className="voted-answer">{question.optionOne.text}</p>
                            </div>
                        }
                        {!question.optionOne.votes.includes(authedUser) &&
                            <div>
                                <p>{question.optionOne.text}</p>
                            </div>
                        }
                        <hr />
                        {question.optionTwo.votes.includes(authedUser) &&
                            <div>
                                <p className="voted-answer">{question.optionTwo.text}</p>
                            </div>
                        }
                        {!question.optionTwo.votes.includes(authedUser) &&
                            <div>
                                <p>{question.optionTwo.text}</p>
                            </div>
                        }
                        <Button
                            as={Link}
                            to={`questions/${question.id}`}
                            variant="dark" >
                            Click for details
                        </Button>
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