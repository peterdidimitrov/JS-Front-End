function solve() {
  document.querySelector("#searchBtn").addEventListener("click", onClick);

  function onClick() {
    const tableFields = Array.from(
      document.querySelectorAll("tbody > tr > td")
    );
    const serchedText = document
      .querySelector("#searchField")
      .value.toLowerCase();
    const activeRows = Array.from(document.querySelectorAll("tbody tr.select"));

    activeRows.forEach((row) => {
      row.classList.remove("select");
    });

    tableFields.forEach((field) => {
      const row = field.parentElement;
      if (field.textContent.toLowerCase().includes(serchedText)) {
        row.classList.add("select");
      }
    });
    document.querySelector("input").value = "";
  }
}
