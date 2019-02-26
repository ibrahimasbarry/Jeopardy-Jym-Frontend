// export default function fetchFlashcards() {
//     return (dispatch) => {
//         dispatch({ type: 'LOADING_FLASHCARDS' })
//         return fetch('http://localhost:3000/')
//             .then(response => response.json())
//             .then(flashcards => dispatch({ type: 'FETCH_FLASHCARDS', payload: flashcards }))
//     }
// } 

export default fetchFlashcards = () => dispatch => {
    return fetch("http://localhost:3000")
      .then(response => response.json())
      .then(flashcards =>
        dispatch({ type: "FETCH_FLASHCARDS", payload: flashcards })
      )
  }