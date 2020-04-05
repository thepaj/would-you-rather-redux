import { getQuestions, addQuestion } from './questions';
import { getUsers, addQuestionToUser } from './users';
import { getInitialData, _saveQuestion } from '../_DATA';

// getting initial data
export function handleInitialData() {
    return (dispatch) => {
        return getInitialData()
            .then(({ questions, users }) => {
                dispatch(getQuestions(questions));
                dispatch(getUsers(users));
            })
    }
}

// adding new question to questions and users
export function handleAddQuestion(optionOneText, optionTwoText) {
    return (dispatch, getState) => {
        const { authedUser } = getState();

        return _saveQuestion({
            optionOneText,
            optionTwoText,
            author: authedUser
        }).then((question) => {
            dispatch(addQuestion(question));
            dispatch(addQuestionToUser(question));
        })
    }
}
