interface Arithmeticable<T> {
    add(other: T): T;
    subtract(other: T): T;
    multiply(other: T): T;
    divide(other: T): T;
}
export declare class ArithmeticableCollection<T extends Arithmeticable<T>> {
    private elements;
    addArithmeticable(element: T): void;
    getArithmeticable(index: number): T;
    getNumberOfArithmeticables(): number;
}
export declare class Complex implements Arithmeticable<Complex> {
    real: number;
    imaginary: number;
    constructor(real: number, imaginary: number);
    add(other: Complex): Complex;
    subtract(other: Complex): Complex;
    multiply(other: Complex): Complex;
    divide(other: Complex): Complex;
    toString(): string;
}
export declare class Rational implements Arithmeticable<Rational> {
    numerator: number;
    denominator: number;
    constructor(numerator: number, denominator: number);
    add(other: Rational): Rational;
    subtract(other: Rational): Rational;
    multiply(other: Rational): Rational;
    divide(other: Rational): Rational;
    toString(): string;
}
export {};
