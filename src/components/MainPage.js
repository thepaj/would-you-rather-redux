import React from 'react';
import { connect } from 'react-redux';
import QuestionList from './QuestionList';
import LogIn from './LogIn';

class MainPage extends React.Component {
    render() {
        const { authedUser } = this.props;

        return (
            <div>
                {authedUser === null
                    ? <LogIn />
                    : <QuestionList />}
            </div>
        )
    }
}

function mapStateToProps({ authedUser }) {
    return {
        authedUser
    }
}

export default connect(mapStateToProps)(MainPage);