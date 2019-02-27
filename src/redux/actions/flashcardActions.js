export const fetchFlashcards = () => dispatch => {
    return fetch("http://localhost:5000/flashcards")
      .then(response => response.json())
      .then(flashcards => 
        dispatch({ type: "FETCH_FLASHCARDS", flashcards })
      )
  }