import React from 'react';
import { connect } from 'react-redux';
import QuestionDetail from './QuestionDetail';

class QuestionDetailPage extends React.Component {
    render() {
        const { id } = this.props;

        return (
            <div>
                <QuestionDetail
                    id={id}
                />
            </div>
        )
    }
}

function mapStateToProps({ authedUser, questions, users }, props) {
    const { id } = props.match.params;

    return {
        id
    }
}

export default connect(mapStateToProps)(QuestionDetailPage);

