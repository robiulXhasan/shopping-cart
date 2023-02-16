// phone click handling
document.getElementById("phone-plus").addEventListener("click", function () {
  const phoneQuantity = getElementInputFieldValue("phone-quantity");
  const updatedQuantity = updateQuantity("phone-quantity", phoneQuantity, 1);
  const updatedPrice = priceUpdate(1219, updatedQuantity);
  setElementValue("phone-price", updatedPrice);
  calculateTotal(1219);
});
document.getElementById("phone-minus").addEventListener("click", function () {
  const phoneQuantity = getElementInputFieldValue("phone-quantity");
  const updatedQuantity = updateQuantity("phone-quantity", phoneQuantity, -1);
  const updatedPrice = priceUpdate(1219, updatedQuantity);
  setElementValue("phone-price", updatedPrice);
  calculateTotal(-1219);
});

// phone case click handling
document.getElementById("phone-case-plus").addEventListener("click", function () {
  const phoneQuantity = getElementInputFieldValue("phone-case-quantity");
  const updatedQuantity = updateQuantity("phone-case-quantity", phoneQuantity, 1);
  const updatedPrice = priceUpdate(59, updatedQuantity);
  setElementValue("phone-case-price", updatedPrice);
  calculateTotal(59);
});
document.getElementById("phone-case-minus").addEventListener("click", function () {
  const phoneCaseQuantity = getElementInputFieldValue("phone-case-quantity");
  const updatedQuantity = updateQuantity("phone-case-quantity", phoneCaseQuantity, -1);
  const updatedPrice = priceUpdate(59, updatedQuantity);
  setElementValue("phone-case-price", updatedPrice);
  calculateTotal(-59);
});
