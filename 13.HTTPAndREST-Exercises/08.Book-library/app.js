function attachEvents() {
  const baseURL = "http://localhost:3030/jsonstore/collections/books";

  document.querySelector("#loadBooks").addEventListener("click", loadAllBooks);

  const titleInput = document.querySelector('input[name="title"]');
  const authorInput = document.querySelector('input[name="author"]');
  const submitSaveButton = document.querySelector("#form > button");
  const tableBody = document.querySelector("tbody");

  function loadAllBooks() {
    while (tableBody.firstChild) {
      tableBody.removeChild(tableBody.firstChild);
    }

    fetch(baseURL)
      .then((res) => res.json())
      .then((books) => {
        Object.values(books).forEach((book) => {
          const row = document.createElement("tr");
          tableBody.appendChild(row);

          const cellBook = document.createElement("td");
          const cellAuthor = document.createElement("td");
          const cellAction = document.createElement("td");

          cellBook.textContent = book.title;
          cellAuthor.textContent = book.author;

          row.appendChild(cellBook);
          row.appendChild(cellAuthor);
          row.appendChild(cellAction);

          const editButton = document.createElement("button");
          editButton.textContent = "Edit";
          const deleteButton = document.createElement("button");
          deleteButton.textContent = "Delete";
          cellAction.appendChild(editButton);
          cellAction.appendChild(deleteButton);
          editButton.addEventListener("click", editBookInfo);
          deleteButton.addEventListener("click", deleteBook);
          function editBookInfo() {}
          function deleteBook(e) {
            fetch(baseURL, {
              method: "DELETE",
            });
            console.log(e);
          }
        });
      });
  }
  const httpHeaders = {
    method: "Post",
    body: JSON.stringify({
      author: authorInput.textContent,
      title: titleInput.textContent,
    }),
  };
  if (submitSaveButton.textContent === "Submit") {
    fetch(baseURL, httpHeaders)
      .then((res) => res.json())
      .then((book) => {
        createRow(book);
      });
  }

  function editBookInfo() {}
  function deleteBook() {}

  function createRow(book) {}
}

attachEvents();
