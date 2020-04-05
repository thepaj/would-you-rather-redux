import { GET_USERS, SAVE_ANSWER, ADD_QUESTION_TO_USER } from '../actions/users';

export default function users(state = {}, action) {
    switch (action.type) {
        case GET_USERS:
            return {
                ...action.users
            }
        case ADD_QUESTION_TO_USER:
            console.log(`author is: ${action.question.author}`);
            return {
                ...state,
                [action.question.author]: {
                    ...state[action.question.author],
                    questions: state[action.question.author].questions.concat([action.question.id])
                }
            }
        case SAVE_ANSWER:
            return {
                ...state,
                [action.authedUser]: {
                    ...state[action.authedUser],
                    answers: {
                        ...state[action.authedUser].answers,
                        [action.qid]: action.answer
                    }
                }
            }
        default:
            return state
    }
}
