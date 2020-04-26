import React from 'react';
import { connect } from 'react-redux';
import Image from 'react-bootstrap/Image';
import { setAuthedUser } from '../actions/authedUser';
import { Redirect } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class User extends React.Component {
    state = {
        redirect: null
    }

    handleOnUserClick = () => {
        this.props.dispatch(setAuthedUser(this.props.user.id))

        this.setState({
            redirect: '/'
        })
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect} />
        }

        const { user } = this.props;

        return (
            <div>
                <Container
                    className="user-container"
                    border="secondary"
                    onClick={this.handleOnUserClick}
                    style={{ width: '18rem' }}>
                    <Row>
                        <Col>
                            <div><Image src={user.avatarURL} roundedCircle className='user-avatar' /></div>
                            <div className="user-name-login">
                                <p>{user.name}</p>
                            </div>
                        </Col>
                    </Row>

                </Container>
            </div>
        )
    }
}

function mapStateToProps({ users }, { id }) {
    const user = users[id];

    return {
        user
    }
}

export default connect(mapStateToProps)(User);