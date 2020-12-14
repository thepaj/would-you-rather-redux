import React from 'react';
import { connect } from 'react-redux';
import User from './User';

class LogIn extends React.Component {
    render() {
        return (
            <div className='login-container'>
                <h3 className="second-heading">Who is playing?</h3>
                <div className='login-user-container'>
                    {this.props.usersIds.map((id) => (
                        <div key={id} className="login-user">
                            <User
                                id={id}
                            />
                        </div>
                    ))}
                </div>
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