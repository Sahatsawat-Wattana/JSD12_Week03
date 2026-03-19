import readline from "readline";

function celciusToFahrenheit(temp) {
  return (temp * 9) / 5 + 32;
}

function fahrenheitToCelcius(temp) {
  return ((temp - 32) * 5) / 9;
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter temperature:", (tempInput) => {
  const temp = parseFloat(tempInput);
  rl.question("Enter unit (C/F): ", (unitInput) => {
    const unit = unitInput.trim().toUpperCase();

    let result;

    switch (unit) {
      case "C":
        result = celciusToFahrenheit(temp);
        console.log(`${temp}°C is equal to ${result.toFixed(2)}°F`);
        break;
      case "F":
        result = fahrenheitToCelcius(temp);
        console.log(`${temp}°F is equal to ${result.toFixed(2)}°C`);
        break;
      default:
        console.log("Invalid unit. Please enter 'C' or 'F'.");
        break;
    }

    rl.close();
  });
});
