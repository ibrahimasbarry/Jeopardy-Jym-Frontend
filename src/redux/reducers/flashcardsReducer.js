export default function flashcardsReducer (state = {
    flashcards: [],
    loading: false
}, action) {
    switch(action.type) {
        case 'LOADING_FLASHCARDS':
            return {...state, loading: true}
        case 'FETCH_FLASHCARDS':
            return {...state, loading: false, flashcards: action.flashcards}
        default:
          return state
    }
}
