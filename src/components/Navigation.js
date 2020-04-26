import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { connect } from 'react-redux';
import { setAuthedUser } from '../actions/authedUser';

class Navigation extends React.Component {
    onSignOutClick = () => {
        this.props.dispatch(setAuthedUser(null))
    }

    render() {
        const { authedUser } = this.props;

        return (
            <div>
                <Navbar expand="lg" className="navbar-top">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse >
                        <Nav className="mr-auto">
                            <Nav.Link as={Link} to='/'>Dashboard</Nav.Link>
                            {authedUser
                                ? <Nav.Link as={Link} to='/add'>Add question</Nav.Link>
                                : <Nav.Link disabled as={Link} to='/add'>Add question</Nav.Link>
                            }
                            <Nav.Link as={Link} to='/leaderboard'>Leaderboard</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                        {authedUser
                            ?
                            <Navbar.Text className="sign-user">
                                Signed in as:   <a href="#login">{authedUser}</a>
                            </Navbar.Text>
                            : null
                        }
                        {authedUser
                            ?
                            <Nav>
                                <Nav.Link
                                    onClick={this.onSignOutClick}
                                    as={Link}
                                    to='/login'>Sign out</Nav.Link>
                            </Nav>
                            :
                            <Nav>
                                <Nav.Link as={Link} to='/login'>Log in</Nav.Link>
                            </Nav>
                        }
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}

function mapStateToProps({ authedUser }) {
    return {
        authedUser
    }
}

export default connect(mapStateToProps)(Navigation);