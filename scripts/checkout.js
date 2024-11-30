import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { loadProducts } from "../data/products.js";
// import "../data/cart-class.js";
// import "../data/backend-practice.js";

//This is a Promise One with resolve
new Promise((resolve) => {
  loadProducts(() => {
    resolve();
  });
}).then(() => {
  renderOrderSummary();
  renderPaymentSummary();
});

//This is a Callback One
// loadProducts(() => {
//   renderOrderSummary();
//   renderPaymentSummary();
// });
