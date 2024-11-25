import { formatCurrency as money } from "../scripts/utils/money.js";

console.log("test suite: Format Currency");
console.log("Checks whether rounding up or not");
if (money(2000.4) === "20.00") {
  console.log("Passed");
} else {
  console.log("Failed");
}

console.log(money(2000.4));
