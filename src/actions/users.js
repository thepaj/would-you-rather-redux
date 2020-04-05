import { _saveQuestionAnswer } from '../_DATA';

export const GET_USERS = 'GET_USERS';
export const SAVE_ANSWER = 'SAVE_ANSWER';
export const ADD_QUESTION_TO_USER = 'ADD_QUESTION_TO_USER';

// getting initial users
export function getUsers(users) {
    return {
        type: GET_USERS,
        users
    }
}

// adding new question 
export function addQuestionToUser(question) {
    return {
        type: ADD_QUESTION_TO_USER,
        question
    }
}

// saving answer
function saveAnswer({ authedUser, qid, answer }) {
    return {
        type: SAVE_ANSWER,
        authedUser,
        qid,
        answer
    }
}

export function handleSaveAnswer(info) {
    return (dispatch) => {

        dispatch(saveAnswer(info))

        return _saveQuestionAnswer(info)
            .catch(() => {
                alert('An error occured. Please try again.')
            })

    }
}




