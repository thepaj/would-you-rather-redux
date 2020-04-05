import { _saveQuestionAnswer } from '../_DATA';

export const GET_QUESTIONS = 'GET_QUESTIONS';
export const ADD_QUESTION = 'ADD_QUESTION';
export const VOTE_QUESTION = 'VOTE_QUESTION';

// getting initial questions
export function getQuestions(questions) {
    return {
        type: GET_QUESTIONS,
        questions
    }
}

// adding new question
export function addQuestion(question) {
    return {
        type: ADD_QUESTION,
        question
    }
}

// managing voting
export function voteQuestion({ authedUser, qid, answer }) {
    return {
        type: VOTE_QUESTION,
        authedUser,
        qid,
        answer
    }
}

export function handleVoteQuestion(info) {
    return (dispatch) => {

        dispatch(voteQuestion(info))

        return _saveQuestionAnswer(info)
            .catch(() => {
                alert('An error occured. Please try again.')
            })
    }
}