import { GET_QUESTIONS, ADD_QUESTION, VOTE_QUESTION } from '../actions/questions';

export default function questions(state = {}, action) {
    switch (action.type) {
        case GET_QUESTIONS:
            return {
                ...state,
                ...action.questions
            }
        case ADD_QUESTION:
            console.log(`id is: ${action.question.id}`)
            return {
                ...state,
                [action.question.id]: action.question
            }
        case VOTE_QUESTION:
            return {
                ...state,
                [action.qid]: {
                    ...state[action.qid],
                    [action.answer]: {
                        ...state[action.qid][action.answer],
                        votes: state[action.qid][action.answer].votes.concat([action.authedUser])
                    }
                }
            }
        default:
            return state
    }
}