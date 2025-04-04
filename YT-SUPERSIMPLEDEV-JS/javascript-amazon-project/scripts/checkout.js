import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { loadProducts } from "../data/products.js";
// import '../data/cart-class.js';
// import '../data/backennd-practice.js';

loadProducts(() => {
  renderOrderSummary();
  renderPaymentSummary();
});
