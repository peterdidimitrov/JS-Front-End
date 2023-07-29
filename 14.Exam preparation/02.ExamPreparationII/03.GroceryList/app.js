const BASE_URL = "http://localhost:3030/jsonstore/grocery/";
const productInput = document.querySelector("#product");
const countInput = document.querySelector("#count");
const priceInput = document.querySelector("#price");
const addProductButton = document.querySelector("#add-product");
const updateProductButton = document.querySelector("#update-product");
const loadAllProductsButton = document.querySelector("#load-product");
const tbody = document.querySelector("#tbody");
let updatedProductId = "";
addProductButton.addEventListener("click", addProduct);
loadAllProductsButton.addEventListener("click", loadAllProduct);

function addProduct(e) {
  e?.preventDefault();
  const headers = {
    method: "POST",
    body: JSON.stringify({
      product: productInput.value,
      count: countInput.value,
      price: priceInput.value,
    }),
  };
  // if (productInput.value === "" || countInput.value === "" || priceInput.value === "") {
  //   return;
  // }
  fetch(BASE_URL, headers).then(() => loadAllProduct(e));
  productInput.value = "";
  countInput.value = "";
  priceInput.value = "";
}

function loadAllProduct(e) {
  e?.preventDefault();
  tbody.innerHTML = "";
  fetch(BASE_URL)
    .then((res) => res.json())
    .then((data) => {
      Object.values(data).forEach(({ product, count, price, _id }) => {
        let trElement = createElement("tr", "", tbody);
        let tdName = createElement("td", product, trElement);
        tdName.className = "name";
        let tdCount = createElement("td", count, trElement);
        tdCount.className = "count-product";
        let tdPrice = createElement("td", price, trElement);
        tdPrice.className = "product-price";
        let tdAction = createElement("td", "", trElement);
        tdAction.className = "btn";
        let updateButton = createElement("button", "Update", tdAction);
        updateButton.className = "update";
        updateButton.id = _id;
        let deleteButton = createElement("button", "Delete", tdAction);
        deleteButton.className = "delete";
        deleteButton.id = _id;
        updateButton.addEventListener("click", update);
        deleteButton.addEventListener("click", deleteProduct);
      });
    });
}

function update(e) {
  updateProductButton.disabled = false;
  addProductButton.disabled = true;
  e.target.parentElement.querySelector(".delete").disabled = true;
  updatedProductId = e.target.id;
  const currentTableRow = e.currentTarget.parentElement.parentElement;
  productInput.value = currentTableRow.querySelector(".name").textContent;
  countInput.value =
    currentTableRow.querySelector(".count-product").textContent;
  priceInput.value =
    currentTableRow.querySelector(".product-price").textContent;
  updateProductButton.addEventListener("click", updateProduct);
}

function updateProduct(e) {
  let newProductName = e.target.parentElement.querySelector("#product").value;
  let newProductCount = e.target.parentElement.querySelector("#count").value;
  let newProductPrice = e.target.parentElement.querySelector("#price").value;
  const headers = {
    method: "PATCH",
    body: JSON.stringify({
      product: newProductName,
      count: newProductCount,
      price: newProductPrice,
    }),
  };

  updateProductButton.disabled = true;
  addProductButton.disabled = false;
  productInput.value = "";
  countInput.value = "";
  priceInput.value = "";
  fetch(BASE_URL + `${updatedProductId}`, headers).then(() =>
    loadAllProduct(e)
  );
}

function deleteProduct(e) {
  const id = e.currentTarget.id;
  const headers = {
    method: "DELETE",
  };
  fetch(BASE_URL + `${id}`, headers).then(() => loadAllProduct(e));
}

function createElement(elementTag, value, parent) {
  const newElement = document.createElement(elementTag);
  newElement.innerHTML = value;
  if (parent) {
    parent.appendChild(newElement);
  }
  return newElement;
}
