function selectBook(book) {
  // this is an ActionCreator
  return {
    type: "BOOK_SELECTED",
    playload: book
  };
}
export { selectBook };
