import React from 'react';
import { connect } from 'react-redux';
import User from './User';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

class LogIn extends React.Component {
    render() {
        return (
            <div>
                <h3>Who is playing?</h3>
                <Row>
                    {this.props.usersIds.map((id) => (
                        <Col key={id} className="list-item">
                            <User
                                id={id}
                            />
                            <br />
                        </Col>
                    ))}
                </Row>
            </div>
        )
    }
}

function mapStateToProps({ users, authedUser }) {
    return {
        usersIds: Object.keys(users),
        authedUser
    }
}

export default connect(mapStateToProps)(LogIn);