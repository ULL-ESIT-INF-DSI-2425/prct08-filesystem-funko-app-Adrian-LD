import { describe, expect, test } from "vitest";
import { Complex, Rational, ArithmeticableCollection } from "/src/rational";


describe("Complex", () => {
  const complex1 = new Complex(3, 4); 
  const complex2 = new Complex(1, 2); 

  test("should correctly add two complex numbers", () => {
    const result = complex1.add(complex2);
    expect(result.real).toBe(4); 
    expect(result.imaginary).toBe(6); 
  });

  test("should correctly subtract two complex numbers", () => {
    const result = complex1.subtract(complex2);
    expect(result.real).toBe(2); 
    expect(result.imaginary).toBe(2); 
  });

  test("should correctly multiply two complex numbers", () => {
    const result = complex1.multiply(complex2);
    expect(result.real).toBe(-5); 
    expect(result.imaginary).toBe(10); 
  });

  test("should correctly divide two complex numbers", () => {
    const result = complex1.divide(complex2);
    expect(result.real).toBeCloseTo(2.2); 
    expect(result.imaginary).toBeCloseTo(-0.4); 
  });

  test("should throw an error when dividing by zero", () => {
    const zeroComplex = new Complex(0, 0); 
    expect(() => complex1.divide(zeroComplex)).toThrowError(
      "Cannot divide by zero."
    );
  });
});


describe("Rational", () => {
  const rational1 = new Rational(1, 2); 
  const rational2 = new Rational(3, 4); 

  test("should correctly add two rational numbers", () => {
    const result = rational1.add(rational2);
    expect(result.numerator).toBe(10); 
    expect(result.denominator).toBe(8); 
  });

  test("should correctly subtract two rational numbers", () => {
    const result = rational1.subtract(rational2);
    expect(result.numerator).toBe(-2);
    expect(result.denominator).toBe(8); 
  });

  test("should correctly multiply two rational numbers", () => {
    const result = rational1.multiply(rational2);
    expect(result.numerator).toBe(3); 
    expect(result.denominator).toBe(8); 
  });

  test("should correctly divide two rational numbers", () => {
    const result = rational1.divide(rational2);
    expect(result.numerator).toBe(4); 
    expect(result.denominator).toBe(6); 
  });

  test("should throw an error when dividing by zero", () => {
    const zeroRational = new Rational(0, 1); 
    expect(() => rational1.divide(zeroRational)).toThrowError(
      "No se puede dividiro por zero, error"
    );
  });

  test("should throw an error when creating a rational with denominator zero", () => {
    expect(() => new Rational(1, 0)).toThrowError(
      "No se puede dividiro por zero, error"
    );
  });
});

describe("ArithmeticableCollection", () => {
  const complexCollection = new ArithmeticableCollection<Complex>();
  const rationalCollection = new ArithmeticableCollection<Rational>();

  test("should add elements to the collection", () => {
    complexCollection.addArithmeticable(new Complex(3, 4));
    complexCollection.addArithmeticable(new Complex(1, 2));
    expect(complexCollection.getNumberOfArithmeticables()).toBe(2);

    rationalCollection.addArithmeticable(new Rational(1, 2));
    rationalCollection.addArithmeticable(new Rational(3, 4));
    expect(rationalCollection.getNumberOfArithmeticables()).toBe(2);
  });

  test("should retrieve elements from the collection", () => {
    const firstComplex = complexCollection.getArithmeticable(0);
    expect(firstComplex.real).toBe(3);
    expect(firstComplex.imaginary).toBe(4);

    const firstRational = rationalCollection.getArithmeticable(0);
    expect(firstRational.numerator).toBe(1);
    expect(firstRational.denominator).toBe(2);
  });

  test("should throw an error when accessing an out-of-bounds index", () => {
    expect(() => complexCollection.getArithmeticable(10)).toThrowError(
      "Index out of bounds"
    );
    expect(() => rationalCollection.getArithmeticable(10)).toThrowError(
      "Index out of bounds"
    );
  });
});