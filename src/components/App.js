import React from 'react';
import { Route } from 'react-router-dom';
import MainPage from './MainPage';
import AddQuestion from './AddQuestion';
import Leaderboard from './Leaderboard';
import LogIn from './LogIn';
import Navigation from './Navigation';
import Container from 'react-bootstrap/Container';
import { handleInitialData } from '../actions/shared';
import { connect } from 'react-redux';
import Jumbotron from 'react-bootstrap/Jumbotron';
import QuestionDetailPage from './QuestionDetailPage';

class App extends React.Component {
    componentDidMount() {
        this.props.dispatch(handleInitialData());
    }

    render() {
        return (
            <div>
                <Navigation />
                <Jumbotron>
                    <Container fluid>
                        <Route exact path='/' component={MainPage} />
                        <Route path='/add' component={AddQuestion} />
                        <Route path='/leaderboard' component={Leaderboard} />
                        <Route path='/login' component={LogIn} />
                        <Route path='/questions/:id' component={QuestionDetailPage} />
                    </Container>
                </Jumbotron>
            </div>
        )
    }
}

export default connect()(App);