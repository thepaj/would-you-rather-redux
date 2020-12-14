import React from 'react';
import { connect } from 'react-redux';
import LeaderboardUser from './LeaderboardUser';

class Leaderboard extends React.Component {
    render() {
        return (
            <div>
                <h1 className="main-title">Leaderboard</h1>
                <div className="item-container">
                    <ol>
                        {this.props.usersIds.map((id) => (
                            <li key={id}>
                                <LeaderboardUser id={id} />
                                <br />
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        )
    }
}

function mapStateToProps({ users }) {

    return {
        usersIds: Object.keys(users)
            .sort((a, b) => (users[b].questions.length + Object.keys(users[b].answers).length) - (users[a].questions.length + Object.keys(users[a].answers).length))
    }
}

export default connect(mapStateToProps)(Leaderboard);