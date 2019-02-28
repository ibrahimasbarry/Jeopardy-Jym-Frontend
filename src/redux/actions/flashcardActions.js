export const fetchFlashcards = () => dispatch => {
    return fetch("http://localhost:5000/flashcards")
      .then(response => response.json())
      .then(flashcards => 
        dispatch({ type: "FETCH_FLASHCARDS", flashcards })
      )
  }

export const createFlashcard = (flashcard) => dispatch => {
  return fetch("http://localhost:5000/flashcards", {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(flashcard)
  })
  .then(response => response.json())
  .then(flashcard =>
    dispatch({ type: "CREATE_FLASHCARD", flashcard})
    )
}