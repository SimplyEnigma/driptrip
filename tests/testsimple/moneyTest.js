import { formatCurrency as money } from "../../scripts/utils/money.js";

console.log("test suite: Format Currency");
console.log("converts cents into dollars");
if (money(2095) === "20.95") {
  console.log("Passed");
} else {
  console.log("Failed");
}

console.log("works with 0");
if (money(0) === "0.00") {
  console.log("Passed");
} else {
  console.log("Failed");
}
console.log("rounds up to the nearest cent");
if (money(2000.5) === "20.01") {
  console.log("Passed");
} else {
  console.log("Failed");
}

console.log(money(2000.4));
console.log("test suite: Format Currency");
console.log("Checks whether rounding up or not");
if (money(2000.4) === "20.00") {
  console.log("Passed");
} else {
  console.log("Failed");
}

console.log(money(2000.4));
