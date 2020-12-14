import React from 'react';
import { connect } from 'react-redux';
import { setAuthedUser } from '../actions/authedUser';
import { Redirect } from "react-router-dom";

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
                <div
                    className="user"
                    border="secondary"
                    onClick={this.handleOnUserClick}
                    style={{ width: '18rem' }}>
                            <img src={user.avatarURL} className='user-avatar' />
                            <div className="user-name-login">
                                {user.name}
                            </div>
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