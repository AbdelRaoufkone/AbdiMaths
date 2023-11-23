// index.js

// Addition de plusieurs nombres
function add(...numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
  }
  
  // Soustraction de plusieurs nombres
  function subtract(...numbers) {
    return numbers.reduce((acc, num) => acc - num);
  }
  
  // Multiplication de plusieurs nombres
  function multiply(...numbers) {
    return numbers.reduce((acc, num) => acc * num, 1);
  }
  
  // Division de deux nombres
  function divide(a, b) {
    if (b === 0) {
      throw new Error("Division par zéro n'est pas autorisée");
    }
    return a / b;
  }
  
  // Obtention du nombre de chiffres dans un nombre
  function getNumberOfDigits(number) {
    return Math.abs(number).toString().length;
  }
  
  // Calcul du sinus d'un angle en radians
  function sin(angleInRadians) {
    return Math.sin(angleInRadians);
  }
  
  // Calcul du cosinus d'un angle en radians
  function cos(angleInRadians) {
    return Math.cos(angleInRadians);
  }
  
  // Calcul de la tangente d'un angle en radians
  function tan(angleInRadians) {
    return Math.tan(angleInRadians);
  }
  
  // Calcul de l'aire d'un triangle
  function triangleArea(base, height) {
    return 0.5 * base * height;
  }
  
  // Calcul de l'aire d'un carré
  function squareArea(side) {
    return side * side;
  }
  
  // Calcul du volume d'un cube
  function cubicVolume(side) {
    return side * side * side;
  }
  
  // Calcul du volume d'un parallélépipède rectangle
  function cuboidVolume(length, width, height) {
    return length * width * height;
  }
  
  // Calcul du périmètre d'un parallélogramme
  function parallelogramPerimeter(a, b) {
    return 2 * (a + b);
  }
  
  // Calcul du périmètre d'un trapèze
  function trapezoidPerimeter(a, b, c, d) {
    return a + b + c + d;
  }
  
  // Résolution d'une équation quadratique (ax^2 + bx + c = 0)
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
  
  // Résolution d'une équation cubique (ax^3 + bx^2 + cx + d = 0)
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
  
  // Calcul de la racine carrée d'un nombre
  function squareRoot(number) {
    return Math.sqrt(number);
  }
  
  // Calcul de la puissance d'un nombre
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
  