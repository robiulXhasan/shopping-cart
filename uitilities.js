// get input field value using a function
function getElementInputFieldValue(id) {
  const inputField = document.getElementById(id);
  const quantity = parseInt(inputField.value);
  return quantity;
}
//update quantity using a function
function updateQuantity(id, value, updateBy) {
  const updatedQuantity = value + updateBy;
  document.getElementById(id).value = updatedQuantity;
  return updatedQuantity;
}
// get element value
function getElementValue(id) {
  return parseInt(document.getElementById(id).innerText);
}

// update price
function priceUpdate(previousPrice, quantity) {
  return previousPrice * quantity;
}
// set value in element
function setElementValue(id, value) {
  document.getElementById(id).innerText = value;
}
// calculate total
function calculateTotal(value) {
  const previousSubTotal = getElementValue("sub-total");
  const subTotal = previousSubTotal + value;
  setElementValue("sub-total", subTotal);
  const tax = parseFloat(((subTotal * 10) / 100).toFixed(2));
  setElementValue("tax", tax);
  const total = subTotal + tax;
  setElementValue("total", total);
}

// remove product
function removeProduct(id) {
  const product = document.getElementById(id);
  product.style.display = "none";
}
