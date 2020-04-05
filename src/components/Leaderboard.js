import React from 'react';
import { connect } from 'react-redux';
import LeaderboardUser from './LeaderboardUser';
import Container from 'react-bootstrap/Container';

class Leaderboard extends React.Component {
    render() {
        return (
            <div>
                <Container fluid>
                    <ol>
                        {this.props.usersIds.map((id) => (
                            <li key={id}>
                                <LeaderboardUser id={id} />
                                <br />
                            </li>
                        ))}
                    </ol>
                </Container>
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