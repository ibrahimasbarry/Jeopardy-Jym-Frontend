// export default function flashcardsReducer (state = {
//     flashcards = [],
//     // loading: false
// }, action) {
//     switch(action.type) {
//         // case 'LOADING_FLASHCARDS':
//         //     return {...state, loading: true}
//         case 'FETCH_FLASHCARDS':
//             return {flashcards: action.payload}
//         default:
//           return state
//     }
// }

export default function flashcardsReducer(state = [], action) {
    switch(action.type) {
        case 'FETCH_FLASHCARDS':
            return action.payload
        default:
            return state
    }
}