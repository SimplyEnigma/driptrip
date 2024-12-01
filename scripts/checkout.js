import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { loadProducts, loadProductsFetch } from "../data/products.js";
// import "../data/cart-class.js";
// import "../data/backend-practice.js";

async function loadPage() {
  console.log("Loading Page");
  try {
    // throw "error1";
    await loadProductsFetch();
    const value = await new Promise((resolve, reject) => {
      loadCart(() => {
        resolve("value3");
      });
    });
  } catch (error) {
    console.log("Unexpected Error");
  }
}

Promise.all([loadProductsFetch()]).then(() => {
  renderOrderSummary();
  renderPaymentSummary();
});

//This is a Promise One with resolve
// new Promise((resolve) => {
//   loadProducts(() => {
//     resolve();
//   });
// }).then(() => {
//   renderOrderSummary();
//   renderPaymentSummary();
// });

//This is a Callback One
// loadProducts(() => {
//   renderOrderSummary();
//   renderPaymentSummary();
// });
