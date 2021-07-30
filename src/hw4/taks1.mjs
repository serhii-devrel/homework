// Validator
import { IPAddressesValidator } from "./validator.mjs";

function countIPs(firstAddress, secondAddress) {
  try {
    IPAddressesValidator.isString(firstAddress)
      .isString(secondAddress)
      .stringNotEmpty(firstAddress)
      .stringNotEmpty(secondAddress);

    const getFormattedAddress = (address, separator) =>
      address.split(separator).map((i) => Number(i));
    const formattedFirstAddress = getFormattedAddress(firstAddress, ".");
    const formattedSecondAddress = getFormattedAddress(secondAddress, ".");
    return formattedFirstAddress.reduce(
      // One byte = eight bits, so:
      (a, b, i) => (a << 8) + formattedSecondAddress[i] - b,
      0
    );
  } catch {
    return "check arguments";
  }
}

console.log(countIPs(10.0, 10.5)); // Incorrect call
console.log(countIPs("", "")); // Incorrect call
console.log(countIPs("10.0.0.0", "10.0.0.50")); // OK
console.log(countIPs("10.0.0.0", "10.0.1.0")); // OK
