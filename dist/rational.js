"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rational = exports.Complex = exports.ArithmeticableCollection = void 0;
class ArithmeticableCollection {
    elements = [];
    addArithmeticable(element) {
        this.elements.push(element);
    }
    getArithmeticable(index) {
        if (index < 0 || index >= this.elements.length) {
            throw new Error("Index out of bounds");
        }
        return this.elements[index];
    }
    getNumberOfArithmeticables() {
        return this.elements.length;
    }
}
exports.ArithmeticableCollection = ArithmeticableCollection;
class Complex {
    real;
    imaginary;
    constructor(real, imaginary) {
        this.real = real;
        this.imaginary = imaginary;
    }
    add(other) {
        return new Complex(this.real + other.real, this.imaginary + other.imaginary);
    }
    subtract(other) {
        return new Complex(this.real - other.real, this.imaginary - other.imaginary);
    }
    multiply(other) {
        return new Complex(this.real * other.real - this.imaginary * other.imaginary, this.real * other.imaginary + this.imaginary * other.real);
    }
    divide(other) {
        const denominator = other.real ** 2 + other.imaginary ** 2;
        if (denominator === 0) {
            throw new Error("Cannot divide by zero.");
        }
        return new Complex((this.real * other.real + this.imaginary * other.imaginary) / denominator, (this.imaginary * other.real - this.real * other.imaginary) / denominator);
    }
    toString() {
        return `${this.real} + ${this.imaginary}i`;
    }
}
exports.Complex = Complex;
class Rational {
    numerator;
    denominator;
    constructor(numerator, denominator) {
        this.numerator = numerator;
        this.denominator = denominator;
        if (denominator === 0) {
            throw new Error("No se puede dividiro por zero, error");
        }
    }
    add(other) {
        const newNumerator = this.numerator * other.denominator + other.numerator * this.denominator;
        const newDenominator = this.denominator * other.denominator;
        return new Rational(newNumerator, newDenominator);
    }
    subtract(other) {
        const newNumerator = this.numerator * other.denominator - other.numerator * this.denominator;
        const newDenominator = this.denominator * other.denominator;
        return new Rational(newNumerator, newDenominator);
    }
    multiply(other) {
        return new Rational(this.numerator * other.numerator, this.denominator * other.denominator);
    }
    divide(other) {
        if (other.numerator === 0) {
            throw new Error("No se puede dividiro por zero, error");
        }
        return new Rational(this.numerator * other.denominator, this.denominator * other.numerator);
    }
    toString() {
        return `${this.numerator}/${this.denominator}`;
    }
}
exports.Rational = Rational;
