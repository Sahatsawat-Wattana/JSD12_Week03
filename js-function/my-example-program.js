import readline from "readline";

class Complex {
  constructor(real, imag) {
    this.real = real;
    this.imag = imag;
  }

  add(other) {
    return new Complex(this.real + other.real, this.imag + other.imag);
  }

  subtract(other) {
    return new Complex(this.real - other.real, this.imag - other.imag);
  }

  multiply(other) {
    return new Complex(
      this.real * other.real - this.imag * other.imag,
      this.real * other.imag + this.imag * other.real,
    );
  }

  divide(other) {
    const denominator = other.real ** 2 + other.imag ** 2;
    if (denominator === 0) {
      throw new Error("Cannot divide by zero complex number");
    }
    return new Complex(
      (this.real * other.real + this.imag * other.imag) / denominator,
      (this.imag * other.real - this.real * other.imag) / denominator,
    );
  }

  toString() {
    const sign = this.imag >= 0 ? "+" : "-";
    return `${this.real} ${sign} ${Math.abs(this.imag)}i`;
  }
}

function toComplex(arr) {
  const [r1, i1, r2, i2] = arr;
  return [new Complex(r1, i1), new Complex(r2, i2)];
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter 4 numbers (r1 i1 r2 i2): ", (input) => {
  const nums = input.trim().split(/\s+/).map(Number);

  if (nums.length !== 4 || nums.some(isNaN)) {
    console.log("Invalid input. Enter exactly 4 numbers.");
    rl.close();
    return;
  }

  const [c1, c2] = toComplex(nums);

  rl.question("Enter operation (+, -, *, /, print): ", (operation) => {
    const op = operation.trim();
    try {
      let result;

      switch (op) {
        case "+":
          result = c1.add(c2);
          console.log(result.toString());
          break;
        case "-":
          result = c1.subtract(c2);
          console.log(result.toString());
          break;
        case "*":
          result = c1.multiply(c2);
          console.log(result.toString());
          break;
        case "/":
          result = c1.divide(c2);
          console.log(result.toString());
          break;
        case "print":
          console.log(c1.toString());
          console.log(c2.toString());
          break;
        default:
          console.log("Invalid operation.");
      }
    } catch (err) {
      console.log("Error:", err.message);
    }

    rl.close();
  });
});
