// index.js

function add(...numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
  }
  
  function subtract(...numbers) {
    return numbers.reduce((acc, num) => acc - num);
  }
  
  function multiply(...numbers) {
    return numbers.reduce((acc, num) => acc * num, 1);
  }
  
  function divide(a, b) {
    if (b === 0) {
      throw new Error("Division par zéro n'est pas autorisée");
    }
    return a / b;
  }
  
  function getNumberOfDigits(number) {
    return Math.abs(number).toString().length;
  }
  
  function sin(angleInRadians) {
    return Math.sin(angleInRadians);
  }
  
  function cos(angleInRadians) {
    return Math.cos(angleInRadians);
  }
  
  function tan(angleInRadians) {
    return Math.tan(angleInRadians);
  }
  
  function triangleArea(base, height) {
    return 0.5 * base * height;
  }
  
  function squareArea(side) {
    return side * side;
  }
  
  function cubicVolume(side) {
    return side * side * side;
  }
  
  function cuboidVolume(length, width, height) {
    return length * width * height;
  }
  
  function parallelogramPerimeter(a, b) {
    return 2 * (a + b);
  }
  
  function trapezoidPerimeter(a, b, c, d) {
    return a + b + c + d;
  }
  
  function quadraticFormula(a, b, c) {
    const delta = b ** 2 - 4 * a * c;
  
    if (delta < 0) {
      return "Pas de racines réelles";
    } else if (delta === 0) {
      const root = -b / (2 * a);
      return [root];
    } else {
      const root1 = (-b + Math.sqrt(delta)) / (2 * a);
      const root2 = (-b - Math.sqrt(delta)) / (2 * a);
      return [root1, root2];
    }
  }
  
  function cubicFormula(a, b, c, d) {
    const discriminant = (18 * a * b * c * d) -
      (4 * b ** 3 * d) +
      (b ** 2 * c ** 2) -
      (4 * a * c ** 3) -
      (27 * a ** 2 * d ** 2);
  
    const delta0 = (b ** 2) - (3 * a * c);
    const delta1 = (2 * b ** 3) - (9 * a * b * c) + (27 * a ** 2 * d);
  
    if (discriminant > 0) {
      const C = Math.cbrt((delta1 + Math.sqrt(discriminant)) / 2);
      const root1 = -((1 / 3) * (b + C + delta0 / C));
      return [root1];
    } else if (discriminant === 0) {
      const root1 = -((1 / 3) * (b + delta0 / (2 * Math.sqrt(delta0))));
      const root2 = -((1 / 3) * (b - delta0 / (2 * Math.sqrt(delta0))));
      return [root1, root2];
    } else {
      const R = -(Math.cbrt(Math.abs(delta1 + Math.sqrt(-discriminant)) / 2));
      const Im = Math.sqrt(3) * Math.cbrt(Math.abs(delta1 - Math.sqrt(-discriminant)) / 2);
      const root1 = -((1 / 3) * (b + R + Im));
      const root2 = -((1 / 3) * (b - (R + Im) / 2));
      const root3 = -((1 / 3) * (b - (R - Im) / 2));
      return [root1, root2, root3];
    }
  }
  
  function squareRoot(number) {
    return Math.sqrt(number);
  }
  
  function power(base, exponent) {
    return base ** exponent;
  }
  
  module.exports = {
    add,
    subtract,
    multiply,
    divide,
    getNumberOfDigits,
    sin,
    cos,
    tan,
    triangleArea,
    squareArea,
    cubicVolume,
    cuboidVolume,
    parallelogramPerimeter,
    trapezoidPerimeter,
    quadraticFormula,
    cubicFormula,
    squareRoot,
    power,
  };
  